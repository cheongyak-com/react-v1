import Layout from '../components/common/Layout';
//import Article from '../components/common/Article';
import React, { useEffect } from 'react';
//import { getFilterAsync } from "../redux/filter";

interface TypeArticle {  
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
  return (
    <Layout type='list'>
      <div id='list'>
        <div className='inner'>
          {/* {(listData && listData?.length) ? listData.map((data: TypeArticle)=>{
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
          } */}
        </div>
      </div>
    </Layout>
  );
}