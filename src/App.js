import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Menu from './pages/Menu';
import Categories from './pages/Categories';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/categories' element={<Categories/>}/>

      </Route>
    </Routes>
    </>
  );
}

export default App;
