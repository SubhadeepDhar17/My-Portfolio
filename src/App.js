import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/layout';
import Home from './Components/Home/home';
import Work from './Components/Work/work';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='work' element={<Work />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;