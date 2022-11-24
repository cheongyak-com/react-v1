import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { RootState } from "../../redux";
import { getFilterAsync } from '../../redux/filter';


interface TypeFilter {
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

interface TypeQueries {
  [index: string]: string,
  state: string,
  area: string,
  type: string,
}

export default function Filter(props: { type: string; }) {

  const dispatch = useDispatch();
  const filterList = useSelector((store: RootState)=> store.filter.data);
  
  useEffect(() => {
    dispatch(getFilterAsync.request(''));
  }, [dispatch])
  console.log('this', filterList);
  
  const searchParams = useSearchParams();
  const [ showFilter, setShowFilter ] = useState(false);
  const [ param, setParam ] = useState(props.type);
  //const router = useRouter();

  const queries: TypeQueries = {
    state: searchParams.get('state') || '',
    area: searchParams.get('area') || '',
    type: searchParams.get('type') || ''
  }

  // const handleClick = (e: React.MouseEvent, key: string, value: string) => {
  //   e.preventDefault();
  //   if (param === 'content') {
  //     router.push(`/list?${key}=${value}`);
  //     return;
  //   }
  //   const setQueryies = {...queries, [key]: value || ''};
  //   if (queries[key] !== value + '') {
  //     router.push(`/list?`);
  //   } else {
  //     router.push({...queries, [key]: ''});
  //   }
  // }

  // const handleReset = (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   if (param === 'content') return;
  //   searchParams.set({});
  // }

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
            {filterList && filterList.map((filter: TypeFilter, i: number)=>{
              return (
                <li key={i}>
                  <span>{filter.name}</span>
                  <ul>
                    {filter && Object.keys(filter.list).map((sub: string)=>{
                      return (
                        <li key={sub}><Link 
                          href={{
                            pathname: '/list',
                            query: { ...queries, [filter.key]: queries[filter.key] === sub ? '' : sub },
                          }}
                          className={queries[filter.key] === sub + '' ? 'on' : undefined}>{filter.list[sub]}</Link></li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
          <Link //onClick={handleReset} 
            className='btnResetFilter' href={'#'}>초기화</Link>
        </div>
      </div>
    </>
  );
}