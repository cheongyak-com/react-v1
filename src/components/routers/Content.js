import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Layout from 'components/common/Layout';
import Map from 'components/common/Map';

export default function Content() {
  const [ ContentData, setContent ] = useState([]);
  const [ FilterList, setFilterList ] = useState(null);
  const [ TabIndex, setTabIndex ] = useState(0);
  const [ SearchParams ] = useSearchParams();
  const baseUrl = useRef(process.env.PUBLIC_URL);

  const paramsId = SearchParams.get('id');

  useEffect(()=>{
    async function fetchData() {
      const result = await axios.get(`${baseUrl.current}/db/dummyList.json`);
      setContent(result.data.articleList[paramsId]);
      setFilterList(result.data.filterList);
    }
    fetchData();
  }, [paramsId])

  console.log(ContentData, FilterList);

  return (
    <Layout>
      {ContentData && FilterList &&
      <div id='content'>
        <figure style={{backgroundImage: `url(${baseUrl.current}/img/${ContentData.thumbnail})`}}>
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
          <ul className='tabMenu'>
            <li className={TabIndex === 0 ? 'on' : undefined} onClick={()=>setTabIndex(0)}>정보</li>
            {/* <li className={TabIndex === 1 ? 'on' : undefined} onClick={()=>setTabIndex(1)}>면적</li> */}
            <li className={TabIndex === 2 ? 'on' : undefined} onClick={()=>setTabIndex(2)}>사진</li>
            <li className={TabIndex === 3 ? 'on' : undefined} onClick={()=>setTabIndex(3)}>위치</li>
          </ul>
          <div className="tabBody">
            <div className={TabIndex === 0 ? 'on' : undefined}>
              <table>
                <tbody>
                  {ContentData.state === '0' ? 
                  <>
                  <tr>
                    <th>모집공고</th>
                    <td>{ContentData.dateGonggo.substring(0,7)} 예정</td>
                  </tr>
                  </> : <>
                  <tr>
                    <th>모집공고</th>
                    <td>{ContentData.dateGonggo}</td>
                  </tr>
                  <tr>
                    <th>특별 공급 접수</th>
                    <td>{ContentData.dateSpecial}</td>
                  </tr>
                  <tr>
                    <th>1순위 접수</th>
                    <td>{ContentData.dateNormal1}</td>
                  </tr>
                  <tr>
                    <th>2순위 접수</th>
                    <td>{ContentData.dateNormal2}</td>
                  </tr>
                  <tr>
                    <th>당첨자 발표</th>
                    <td>{ContentData.dateAnnouncement}</td>
                  </tr>
                  <tr>
                    <th>계약 기간</th>
                    <td>{ContentData.dateContract}</td>
                  </tr>
                  <tr>
                    <th>입주 예정</th>
                    <td>{ContentData.dateMoveIn}</td>
                  </tr>
                  </>}
                  <tr>
                    <th>공식 사이트</th>
                    <td>{ContentData.webSiteUrl}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* <div className={TabIndex === 1 ? 'on' : undefined}>
            </div> */}
            <div className={TabIndex === 2 ? 'on' : undefined}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className={TabIndex === 3 ? 'on' : undefined}>
              <Map latLng={ContentData.latLng} tabIndex={TabIndex}></Map>
            </div>
          </div>
        </div>
      </div>
      }
    </Layout>
  );
}