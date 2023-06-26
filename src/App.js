import React from 'react';
import './App.css';
import Navbar from './components/index';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages/home';
import Menu from './pages/menu';
import OurStory from './pages/ourstory';
import Merch from './pages/merch';
import VengefulBeansLogo from "./VengefulBeansBanner.png"
//.75 width 222
//.75 height 246


const imageStyle = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: "100vw",
  maxHeight: "20vh",
  width: 788,
  height: 164,
};

const menuBreakStyle = {
  border: "1px solid black"
}
 
function App() {
    return (
        <Router>
            <div className='banner'>
              <img style={imageStyle} src={VengefulBeansLogo}></img>
            </div>
            <div style={menuBreakStyle}></div>
            <Navbar />
            <div style={menuBreakStyle}></div>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/ourstory' element={<OurStory />} />
                <Route path='/merch' element={<Merch />} />
            </Routes>
        </Router>
    );
}
 
export default App;
