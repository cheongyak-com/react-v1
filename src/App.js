import 'css/style.css';
import { Route, Routes } from 'react-router-dom';
import IndexSelect from 'components/routers/IndexSelect';
import ArticleList from 'components/routers/ArticleList';


function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexSelect />} />
      <Route path="/list" exct="false" element={<ArticleList />} />
    </Routes>
  );
}

export default App;