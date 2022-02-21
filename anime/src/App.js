import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/Utill/ScrollToTop';
import AnimeDetail from './Routes/AnimeDetail';
import Home from './Routes/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/anime_info/:id' element={<AnimeDetail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
