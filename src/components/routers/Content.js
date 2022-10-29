import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import * as types from '../../redux/actionType';

import Layout from 'components/common/Layout';
import Map from 'components/common/Map';
import ContentPicture from 'components/common/ContentPicture';
import ContentTable from 'components/common/ContentTable';
import Scroll from 'asset/scroll';

export default function Content() {

  const dispatch = useDispatch();
  const ContentData = useSelector((store)=> store.contentReducer.content);
  const FilterList = useSelector((store)=> store.filterReducer.filter);

  const { naver } = window;
  const [ TabIndex, setTabIndex ] = useState(0);
  const [ SearchParams ] = useSearchParams();
  const baseUrl = useRef(process.env.PUBLIC_URL);
  const frame = useRef(null);
  const position = useRef([]);
  const [ curY, setCurY ] = useState(0);
  //let menus;
  
  const tabMenus = ['정보', '결과', '사진', '위치'];
  const paramsId = SearchParams.get('id');

  const getMenus = ()=>{
    position.current = [];
    const menus = frame.current.querySelectorAll('.tabBody>div');
    for (const li of menus) {
      position.current.push(li.offsetTop - 50);
    }
    activation();
  };

  const activation = ()=>{
    const scroll = window.scrollY || window.pageYOffset;
    setCurY(scroll);
  }

  useEffect(() => {
    dispatch({
      type: types.CONTENT.start,
      option: {id: paramsId}
    });
    
    return(()=>{
      window.removeEventListener('resize', getMenus);
      window.removeEventListener('scroll', getMenus);
    });
  }, [])

  useEffect(()=>{
    if (!FilterList) return;
    getMenus();

    window.addEventListener('resize', getMenus);
    window.addEventListener('scroll', getMenus);

  }, [FilterList])
  //console.log(ContentData, FilterList);
  
  return ( <Layout type='content'>
    {ContentData && FilterList.length &&
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
      
      <div className={`inner 
        ${curY >= position.current[0] ? 'menuOn' : undefined}`}
      >
        <ul
          className='tabMenu'>
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
              <div className='inner'>
              <ContentPicture></ContentPicture>
              <ContentPicture></ContentPicture>
              <ContentPicture></ContentPicture>
              </div>
            }
          </div>
          <div className='gallery'>
            <div className='inner'>
            <ContentPicture></ContentPicture>
            <ContentPicture></ContentPicture>
            <ContentPicture></ContentPicture>
            <ContentPicture></ContentPicture>
            </div>
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