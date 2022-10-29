import { useSelector } from 'react-redux';
import Layout from 'components/common/Layout';
import Article from 'components/common/Article';

export default function ArticleList() {
  const listData = useSelector((store)=> store.articleReducer.article);

  return (
    <Layout type='list'>
      <div id='list'>
        <div className='inner'>
          {listData?.map((data, i)=>{
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