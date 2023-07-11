import React from "react";
import * as styles from "../components/styles.js"
import { renderMenu } from "../components/renderMenu.js";
import { renderBottomBar } from "../components/renderBottomBar.js";
import { ThemeContext } from '../context/themeContext.js';
import Snow from "../components/renderSnow.js"
import Rain from "../components/renderRain.js"
import Clouds from "../assets/LongerClouds.png"
import DarkClouds from "../assets/LongerDarkClouds.png"

const renderMenuPage = (darkMode) => {
    if(darkMode) {
        return (
            <div style={styles.backgroundStyles}>
                <div>
                    <img style={styles.cloudsStyles} src={Clouds}></img>
                </div>
                <Snow />
                {renderMenu(darkMode)}
                {renderBottomBar(darkMode)}
            </div>
        )
    }
    else if(!darkMode) {
        return (
            <div style={styles.darkBackgroundStyles}>
                <div>
                    <img style={styles.cloudsStyles} src={DarkClouds}></img>
                </div>
                <Rain />
                {renderMenu(darkMode)}
                {renderBottomBar(darkMode)}
            </div>
        )
    }
}
 
const Menu = () => {
    return (
        <ThemeContext.Consumer>
            {({theme}) => (
                renderMenuPage(theme)
            )}
        </ThemeContext.Consumer>
    );
};
 
export default Menu;