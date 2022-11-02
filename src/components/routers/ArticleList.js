import { useSelector } from 'react-redux';
import Layout from 'components/common/Layout';
import Article from 'components/common/Article';

export default function ArticleList() {
  const listData = useSelector((store)=> store.articleReducer.article.data);
  console.log(listData);

  return (
    <Layout type='list'>
      <div id='list'>
        <div className='inner'>
          {(listData && listData?.length) ? listData.map(data=>{
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