import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Article(props) {

  const [ filterList, setFilterList ] = useState(null);
  const baseUrl = useRef(process.env.PUBLIC_URL);
  useEffect(() => {
    axios.get(`${baseUrl.current}/db/dummyList.json`).then((json)=>{
      setFilterList(json.data.filterList);
    })
  }, [])
  
  return (
    <article>
      <div className='pic'>
        <Link to={`/content?id=${props.id}`}>
          <img src={`${baseUrl.current}/img/${props.imgSrc}`} alt={props.title} />
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