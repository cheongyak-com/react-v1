import 'css/style.css';
import { Route, Routes } from 'react-router-dom';
import IndexSelect from 'components/routers/IndexSelect';
import ListSchedule from 'components/routers/ListSchedule'
import ListCompletion from 'components/routers/ListCompletion'


function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexSelect />} />
      <Route path="/schedule" element={<ListSchedule />} />
      <Route path="/completion" element={<ListCompletion />} />
    </Routes>
  );
}

export default App;