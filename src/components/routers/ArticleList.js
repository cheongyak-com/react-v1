import axios from 'axios';
import Layout from 'components/common/Layout';
import Article from 'components/common/Article';
import { useEffect, useState } from 'react';

export default function ArticleList() {
  const [ listData, setList ] = useState([]);

  const baseUrl = process.env.PUBLIC_URL;

  useEffect(()=>{
    axios.get(`${baseUrl}/db/dummyList.json`).then((json)=>{
      setList(json.data.articleList);
    })
  }, [])

  
  return (
    <Layout type='list'>
      <div id='list'>
        <div className='inner'>
          {listData.map((data, i)=>{
            return (
              <Article key={i} 
                id={i} 
                title={data.title} 
                imgSrc={data.thumbnail} 
                state={data.state} 
                area={data.area} 
                type={data.type} 
              >{data.desc}</Article>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}