import axios from 'axios';
import Layout from "components/common/Layout";
import Article from "components/common/Article";
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function ArticleList(props) {
  const [ listData, setList ] = useState([]);
  const [ searchParams, setSearchParams ] = useSearchParams();
  const params = {
    state: searchParams.get('state') || '',
    area: searchParams.get('area') || '',
    type: searchParams.get('type') || ''
  }

  const baseUrl = `${process.env.PUBLIC_URL}`;

  useEffect(()=>{
    
    axios.get(`${baseUrl}/db/dummyList.json`).then((json)=>{
      setList(json.data.articleList);
    })
  }, [])

  
  return (
    <Layout>
        <div className="inner">
          {listData.map((data, i)=>{
            return (
              <Article key={i} 
                title={data.title} 
                imgSrc={data.imgSrc} 
                state={data.state} 
                area={data.area} 
                type={data.type} 
              >{data.desc}</Article>
            );
          })}
        </div>
    </Layout>
  );
}