import { useSelector } from 'react-redux';
import Layout from '../common/Layout';
import Article from '../common/Article';
import React from 'react';

interface IfArticle {  
  id: number,
  subject: string,
  image:{
    imageFileName: string,
  },
  state: string,
  area: {
    id: string
  },
  type: string,
  desc: React.ReactElement,
}

export default function ArticleList() {
  const listData = useSelector((store: any)=> store.articleReducer.article.data);
  
  return (
    <Layout type='list'>
      <div id='list'>
        <div className='inner'>
          {(listData && listData?.length) ? listData.map((data: IfArticle)=>{
            return (
              <Article key={data.id} 
                id={data.id} 
                subject={data.subject} 
                imageFileName={data.image.imageFileName} 
                state={data.state} 
                area={data.area.id} 
                type={data.type} 
              >{data.desc}</Article>
            );
          })
          : <p>검색된 데이터가 없습니다.</p>
          }
        </div>
      </div>
    </Layout>
  );
}