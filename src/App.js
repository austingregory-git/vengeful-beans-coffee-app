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
import StormCloud from "./assets/StormCloud.png"
import SnowCloud from "./assets/SnowCloud.png"
import * as styles from "./components/styles.js"
import { ThemeContext, themes } from './context/themeContext.js';
import Button from '@mui/material/Button';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  console.log(darkMode)
  return (
      <Router>
          <div style={styles.bannerStyles}>
            <ThemeContext.Consumer>
              {({ changeTheme }) => (
                <Button
                  style={styles.themeToggleButton}
                  onClick={() => {
                    setDarkMode(!darkMode);
                    changeTheme(darkMode ? themes.light : themes.dark);
                  }}
                > <img src={darkMode ? SnowCloud : StormCloud}/>
                </Button>
              )}
            </ThemeContext.Consumer>
            <a href='/home'>
              <img style={styles.bannerImageStyle} src={VengefulBeansLogo}></img>
            </a>

          </div>
          <div style={styles.menuBreakStyle}></div>
          <Navbar />
          <div style={styles.menuBreakStyle}></div>
          <Routes>
              <Route exact path='/' element={<Home />}/>
              <Route path='/home' element={<Home />}/>
              <Route path='/menu' element={<Menu />}/>
              <Route path='/ourstory' element={<OurStory />}/>
              <Route path='/merch' element={<Merch />}/>
          </Routes>
      </Router>
  );
}
 
export default App;
