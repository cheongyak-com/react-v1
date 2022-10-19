import React from 'react';
import 'css/style.css';
import { Route, Routes } from 'react-router-dom';
import IndexSelect from 'components/routers/IndexSelect.js';
import ArticleList from 'components/routers/ArticleList.js';


function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexSelect />} />
      <Route path="/list" exct="false" element={<ArticleList />} />
    </Routes>
  );
}

export default App;