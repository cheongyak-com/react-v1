// import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Article(props) {

  const baseUrl = process.env.PUBLIC_URL;
  const filterList = useSelector((store)=> store.filterReducer.filter);

  
  return (
    <article>
      <div className='pic'>
        <Link to={`/content?id=${props.id}`}>
          <img src={`${baseUrl}/img/${props.imgSrc}`} alt={props.title} />
        </Link>
      </div>
      <div className='txt'>
        <h3>
          {props.title}
        </h3>
        <div className='tags'>
          <span data-state={props.state}>
            {filterList && filterList[0].list[+props.state]}
          </span>
          <span data-area={props.area}>
            {filterList && filterList[1].list[+props.area]}
          </span>
          <span data-type={props.type}>
            {filterList && filterList[2].list[+props.type]}
          </span>
        </div>
      </div>
    </article>
  );
}