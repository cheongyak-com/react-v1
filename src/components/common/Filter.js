import { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';


export default function Filter(props) {
  const [ searchParams, setSearchParams ] = useSearchParams();
  const [ showFilter, setShowFilter ] = useState(false);
  const [ filterList, setFilterList ] = useState(null);
  const baseUrl = useRef(process.env.PUBLIC_URL);
  const param = props.type;

  const queries = {
    'state': searchParams.get('state') || '',
    'area': searchParams.get('area') || '',
    'type': searchParams.get('type') || ''
  }


  const handleClick = (e, key, value) => {
    e.preventDefault();
    if (queries[key+''] !== value + '') {
      setSearchParams({...queries, [key]: value});
    } else {
      setSearchParams({...queries, [key]: ''});
    }
  }

  const handleReset = (e) => {
    e.preventDefault();
    setSearchParams({});
  }

  useEffect(() => {
    if (param === 'list' && window.innerWidth >= 1180) setShowFilter(true);
    axios.get(`${baseUrl.current}/db/dummyList.json`).then((json)=>{
      setFilterList(json.data.filterList);
    })
  }, [])

  const handleFilter = () => {
    !showFilter ? setShowFilter(true) : setShowFilter(false) ;
  }

  return (
    <>
      <i className={`btnShowFilter ${showFilter ? 'on' : null}`} onClick={handleFilter}></i>
      <div id='filter' className={showFilter ? 'on' : null}>
        <div className='inner'>
          <ul>
            {filterList && filterList.map((filter, i)=>{
              return (
                <li key={i}>
                  <span>{filter.name}</span>
                  <ul>
                    {filter && filter.list.map((sub, j)=>{
                      return (
                        <li key={j}><Link 
                          onClick={(e)=>{handleClick(e, filter.key, j)}}
                          className={queries[filter.key] === j + '' ? 'on' : null}
                        >{sub}</Link></li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
          <Link onClick={handleReset} className='btnResetFilter'>초기화</Link>
        </div>
      </div>
    </>
  );
}