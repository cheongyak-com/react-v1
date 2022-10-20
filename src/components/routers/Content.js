import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Layout from 'components/common/Layout';
import Map from 'components/common/Map';
import ContentPicture from 'components/common/ContentPicture';
import ContentTable from 'components/common/ContentTable';
import Scroll from 'asset/scroll';

export default function Content() {
  const { naver } = window;
  const [ ContentData, setContent ] = useState([]);
  const [ FilterList, setFilterList ] = useState(null);
  const [ TabIndex, setTabIndex ] = useState(0);
  const [ SearchParams ] = useSearchParams();
  const baseUrl = useRef(process.env.PUBLIC_URL);
  const frame = useRef(null);
  const position = useRef([]);
  const [ curY, setCurY ] = useState(0);
  let menus;
  
  const tabMenus = ['정보', '결과', '사진', '위치'];
  const paramsId = SearchParams.get('id');

  const getMenus = ()=>{
    position.current = [];
    menus = frame.current.querySelectorAll('.tabBody>div');
    for (const li of menus) {
      position.current.push(li.offsetTop);
    }
  };

  const acrivation = ()=>{
    const scroll = window.scrollY || window.pageYOffset;
    setCurY(scroll);
  }

  useEffect(()=>{
    async function fetchData() {
      const result = await axios.get(`${baseUrl.current}/db/dummyList.json`);
      setContent(result.data.articleList[paramsId]);
      setFilterList(result.data.filterList);
    }
    fetchData();
  }, [paramsId])

  useEffect(()=>{
    if (!FilterList) return;
    getMenus();

    window.addEventListener('scroll', ()=>{
      acrivation();
    })
  }, [FilterList])
  //console.log(ContentData, FilterList);
  
  return ( <Layout>
    {ContentData && FilterList &&
    <div id='content' ref={frame}>
      <figure
        style={{backgroundImage: `url(${baseUrl.current}/img/${ContentData.thumbnail})`}}
      >
        <div className='txt'>
          <div className='date'>
            {ContentData.dateGonggo}-{ContentData.dateAnnouncement} {FilterList[0].list[ContentData.state]}
          </div>
          <h1>{ContentData.title}</h1>
          <div className='tags'>
            <span>#{FilterList[1].list[ContentData.area]}</span>
            <span>#{FilterList[2].list[ContentData.type]}</span>
          </div>
        </div>
      </figure>
      
      <div className='inner'>
        <ul
          className={`tabMenu 
          ${curY >= position.current[0] ? 'on' : undefined}`}
        >
          {tabMenus.map((menu, i)=>{
            if (i === 1 && ContentData.state !== '2') return;
            return (
              <li key={i} 
                className={TabIndex === i ? 'on' : undefined}
                onClick={()=>{setTabIndex(i); Scroll(position.current[i]);}}
              >{menu}</li>
            );
          })}
        </ul>
        <div className='tabBody'>
          <div>
            <ContentTable data={ContentData}></ContentTable>
          </div>
          <div className='gallery'>
            {ContentData.state === '2' && 
              <>
              <ContentPicture></ContentPicture>
              <ContentPicture></ContentPicture>
              <ContentPicture></ContentPicture>
              </>
            }
          </div>
          <div className='gallery'>
            <ContentPicture></ContentPicture>
            <ContentPicture></ContentPicture>
            <ContentPicture></ContentPicture>
            <ContentPicture></ContentPicture>
          </div>
          <div>
            <Map latLng={ContentData.latLng} naver={naver}></Map>
          </div>
        </div>
      </div>
    </div>
    }
  </Layout>);
}