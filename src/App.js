//import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import About from './Pages/About';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Home/>}></Route>
        <Route path ="/Menu" element={<Menu/>}></Route>
        <Route path ="/Home" element={<Home/>}></Route>
        <Route path ="/About" element={<About/>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
