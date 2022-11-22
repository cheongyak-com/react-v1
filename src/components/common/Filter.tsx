import { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';


interface IfFilter {
  key: string;
  name: string;
  list: {
    [index: string]: string,
    INFO: string;
    EXPECT: string;
    ING: string;
    COMPLETE: string;
  }
}

interface IfQueries {
  [index: string]: string,
  state: string,
  area: string,
  type: string,
}

export default function Filter(props: { type: string; }) {

  const filterList = useSelector((store: any)=> store.filterReducer.filter);
  const [ searchParams, setSearchParams ] = useSearchParams();
  const [ showFilter, setShowFilter ] = useState(false);
  const [ param, setParam ] = useState(props.type);
  const navigate = useNavigate();

  const queries: IfQueries = {
    state: searchParams.get('state') || '',
    area: searchParams.get('area') || '',
    type: searchParams.get('type') || ''
  }


  const handleClick = (e: React.MouseEvent, key: string, value: string) => {
    e.preventDefault();
    if (param === 'content') {
      navigate(`/list?${key}=${value}`);
      return;
    }
    if (queries[key] !== value + '') {
      setSearchParams({...queries, [key]: value});
    } else {
      setSearchParams({...queries, [key]: ''});
    }
  }

  const handleReset = (e: React.MouseEvent) => {
    e.preventDefault();
    if (param === 'content') return;
    setSearchParams({});
  }

  useEffect(() => {
    if (param === 'list' && window.innerWidth >= 1180) setShowFilter(true);
    setParam(props.type);
  }, [param, props.type])

  const handleFilter = () => {
    !showFilter ? setShowFilter(true) : setShowFilter(false) ;
  }

  return (
    <>
      <i className={`btnShowFilter ${showFilter ? 'on' : null}`} onClick={handleFilter}></i>
      <div id='filter' className={showFilter ? 'on' : undefined}>
        <div className='inner'>
          <ul>
            {filterList && filterList.map((filter: IfFilter, i: number)=>{
              return (
                <li key={i}>
                  <span>{filter.name}</span>
                  <ul>
                    {filter && Object.keys(filter.list).map((sub: string)=>{
                      return (
                        <li key={sub}><Link 
                          onClick={(e) => { handleClick(e, filter.key, sub); } }
                          className={queries[filter.key] === sub + '' ? 'on' : undefined} to={'#'}>{filter.list[sub]}</Link></li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
          <Link onClick={handleReset} className='btnResetFilter' to={'#'}>초기화</Link>
        </div>
      </div>
    </>
  );
}