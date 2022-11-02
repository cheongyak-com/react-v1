import { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function Filter(props) {

  const filterList = useSelector((store)=> store.filterReducer.filter);
  const [ searchParams, setSearchParams ] = useSearchParams();
  const [ showFilter, setShowFilter ] = useState(false);
  const [ param, setParam ] = useState(props.type);
  const navigate = useNavigate();

  const queries = {
    'state': searchParams.get('state') || '',
    'area': searchParams.get('area') || '',
    'type': searchParams.get('type') || ''
  }


  const handleClick = (e, key, value) => {
    e.preventDefault();
    if (param === 'content') {
      navigate(`/list?${key}=${value}`);
      return;
    }
    if (queries[key+''] !== value + '') {
      setSearchParams({...queries, [key]: value});
    } else {
      setSearchParams({...queries, [key]: ''});
    }
  }

  const handleReset = (e) => {
    e.preventDefault();
    if (param === 'content') return;
    setSearchParams({});
  }

  useEffect(() => {
    if (param === 'list' && window.innerWidth >= 1180) setShowFilter(true);
    setParam(props.type);
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
                    {filter && Object.keys(filter.list).map(sub=>{
                      return (
                        <li key={sub}><Link 
                          onClick={(e)=>{handleClick(e, filter.key, sub)}}
                          className={queries[filter.key] === sub + '' ? 'on' : null}
                        >{filter.list[sub]}</Link></li>
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