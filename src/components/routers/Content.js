import axios from 'axios';
import Layout from "components/common/Layout";
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Content(props) {
  const [ contentData, setContent ] = useState([]);
  const [ filterList, setFilterList ] = useState(null);
  const [ searchParams, _ ] = useSearchParams();
  const index = searchParams.get('id');

  const baseUrl = useRef(process.env.PUBLIC_URL);

  useEffect(()=>{
    axios.get(`${baseUrl.current}/db/dummyList.json`).then((json)=>{
      setContent(json.data.articleList[index]);
      setFilterList(json.data.filterList);

    })
  }, [])
  console.log(contentData, filterList);
  return (
    <Layout>
      {contentData && filterList &&
      <div id="content">
        <figure style={{backgroundImage: `url(${baseUrl.current}/img/${contentData.imgSrc})`}}>
          <h1>{contentData.title}</h1>
          <div className="tags">
            <span>{filterList[0].list[contentData.state]}</span>
            <span>{filterList[1].list[contentData.area]}</span>
            <span>{filterList[2].list[contentData.type]}</span>
          </div>
        </figure>
        <div className="inner">
          <main>
          {contentData.desc}
          </main>
        </div>
      </div>
      }
    </Layout>
  );
}