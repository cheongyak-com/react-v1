import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';


export default function Filter() {
  const [ searchParams, setSearchParams ] = useSearchParams();
  const [ filterList, setFilterList ] = useState();
  const params = {
    state: searchParams.get('state') || '',
    area: searchParams.get('area') || '',
    type: searchParams.get('type') || ''
  }

  const handleClick = (e, key, value) => {
    e.preventDefault();
    setSearchParams({...params, [key]: value});
  }

  const baseUrl = process.env.PUBLIC_URL;
  useEffect(() => {
    axios.get(`${baseUrl}/db/dummyList.json`).then((json)=>{
      setFilterList(json.data.filterList);
    })
  }, [])

  return (
    <>
      <i className="btnFilter"></i>
      <div id="filter" className='on'>
        <div className="inner">
          <ul>
            {filterList && filterList.map((filter, i)=>{
              return (
                <li key={i}>
                  <span>{filter.name}</span>
                  <ul>
                    <li><Link 
                      onClick={(e)=>{handleClick(e, filter.key, '')}}
                      className={params[filter.key] === '' ? 'on' : null}
                    >전체</Link></li>
                    {filter && filter.list.map((sub, j)=>{
                      return (
                        <li key={j}><Link 
                          onClick={(e)=>{handleClick(e, filter.key, j)}}
                          className={params[filter.key] === j + '' ? 'on' : null}
                        >{sub}</Link></li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}