import React from 'react';
import 'css/style.css';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as types from './redux/actionType';

// routers
import IndexSelect from 'components/routers/IndexSelect';
import ArticleList from 'components/routers/ArticleList';
import Content from 'components/routers/Content';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: types.FILTER.start,
    });
    dispatch({
      type: types.ARTICLE.start,
    });
    dispatch({
      type: types.CONTENT.start,
      option: {id: 1}
    });
  }, [])

  return (
    <Routes>
      <Route path='/' element={<IndexSelect />} />
      <Route path='/list' exct='false' element={<ArticleList />} />
      <Route path='/content' exct='false' element={<Content />} />
    </Routes>
  );
}

export default App;