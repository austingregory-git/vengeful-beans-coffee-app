import React from 'react';
import './App.css';
import {Navbar, DarkNavbar} from './components/index';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages/home';
import Menu from './pages/menu';
import OurStory from './pages/ourstory';
import Merch from './pages/merch';
import VengefulBeansLogo from "./assets/VengefulBeansBanner.png"
import DarkVengefulBeansLogo from "./assets/DarkVengefulBeansBanner.png"
import StormCloud from "./assets/StormCloud.png"
import SnowCloud from "./assets/SnowCloud.png"
import * as styles from "./components/styles.js"
import { ThemeContext, themes } from './context/themeContext.js';
import Button from '@mui/material/Button';

const renderApplication = (darkMode, setDarkMode) => {
  if(darkMode) {
    return (
      <Router>
          <div style={styles.darkBannerStyles}>
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
              <img style={styles.bannerImageStyle} src={DarkVengefulBeansLogo}></img>
            </a>

          </div>
          <div style={styles.darkMenuBreakStyle}></div>
          <DarkNavbar />
          <div style={styles.darkMenuBreakStyle}></div>
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
  if(!darkMode) {
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
}

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  return (
    <ThemeContext.Consumer>
      {() => renderApplication(darkMode, setDarkMode)}
    </ThemeContext.Consumer>
  );
}
 
export default App;
