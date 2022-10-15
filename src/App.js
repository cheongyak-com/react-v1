import 'css/style.css';
import { Route, Routes } from 'react-router-dom';
import IndexSelect from 'components/main/IndexSelect';
import ListSchedule from 'components/sub/ListSchedule'
import ListCompletion from 'components/sub/ListCompletion'


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