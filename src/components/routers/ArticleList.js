import { useParams } from 'react-router-dom';
import axios from 'axios';
import Layout from "components/common/Layout";
import Article from "components/common/Article";
import { useEffect, useState } from 'react';

export default function ArticleList(props) {
  const [ listData, setList ] = useState([]);
  const { listType } = useParams();

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
            <Article key={i} listType={listType} title={data.title} imgSrc={data.imgSrc}>{data.desc}</Article>
          );
        })}
      </div>
    </Layout>
  );
}