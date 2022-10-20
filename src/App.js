import React from 'react';
import 'css/style.css';
import { Route, Routes } from 'react-router-dom';
import IndexSelect from 'components/routers/IndexSelect';
import ArticleList from 'components/routers/ArticleList';
import Content from 'components/routers/Content';


function App() {
  return (
    <Routes>
      <Route path='/' element={<IndexSelect />} />
      <Route path='/list' exct='false' element={<ArticleList />} />
      <Route path='/content' exct='false' element={<Content />} />
    </Routes>
  );
}

export default App;