import './scss/style.scss';
import { Route, Routes, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as types from './redux/actionType';

// routers
import IndexSelect from './components/routers/IndexSelect';
import ArticleList from './components/routers/ArticleList';
import Content from './components/routers/Content';
import React from 'react';


function App() {
  const dispatch = useDispatch();
  const [ searchParams ] = useSearchParams();

  useEffect(() => {
    const queries = {
      'state': searchParams.get('state') || '',
      'area': searchParams.get('area') || '',
      'type': searchParams.get('type') || ''
    }
    
    dispatch({
      type: types.FILTER.start,
    });
    dispatch({
      type: types.ARTICLE.start,
      option: {
        state: queries.state,
        area: queries.area,
        type: queries.type,
      }
    });
  }, [searchParams, dispatch])

  return (
    <Routes>
      <Route path='/' element={<IndexSelect />} />
      <Route path='/list/*' element={<ArticleList />} />
      <Route path='/content/*' element={<Content />} />
    </Routes>
  );
}

export default App;