import React, { useState, useEffect } from 'react';
import './home.css'
import Grid from '@mui/material/Unstable_Grid2'
import VengefulBeansPixelArt from "../assets/VengefulBeansCoffeeShopPixelArt.png"
import VengefulBeansPixelArtSnow from "../assets/VengefulBeansCoffeeShopPixelArtSnow.png"
import TheSpiderQueen from "../assets/TheSpiderQueen.png"
import SnowInMay from "../assets/SnowInMay.png"
import {menuData} from "../data/menuData.js"
import * as styles from '../components/styles.js'
import { renderMenu } from "../components/renderMenu";
import { renderBottomBar } from "../components/renderBottomBar";
import Snow from "../components/renderSnow.js"
import Rain from "../components/renderRain.js"
import Clouds from "../assets/LongerClouds.png"
import DarkClouds from "../assets/LongerDarkClouds.png"
import { ThemeContext, themes } from '../context/themeContext.js';


const schedule = "Schedule:\n\nMonday - Friday: 6am - 6pm\nSaturday - Sunday: 6am - 8pm\n\n";
const location = "Location:\n\n722 Paramore St.";
const featuredItems = "Featured Items\n\n";

const getDescriptionFromName = (menuItemName, menuItemType) => {
    const { items } = menuData[menuItemType]
    const item = items.find((item) => item.name === menuItemName);
    const itemString = item.name + "\n\n" + item.description
    return item ? itemString : null;
}

const renderHome = (darkMode) => {
    if(darkMode) {
        return (
            <div style={styles.backgroundStyles}>
                <div>
                    <img style={styles.cloudsStyles} src={Clouds}></img>
                </div>
                <Snow />
                <div>
                    <img style={styles.imageStyle} src={VengefulBeansPixelArtSnow}></img>
                </div>
                <div style={styles.scheduleStyles}>
                    {schedule+location}
                </div>
                <div style={styles.featuredItemsStyles}>
                    {featuredItems}
                    <Grid container spacing={4}>
                        <Grid xs={6}>
                            <div className="image-container" style={styles.featuredItemsGridStyles}>
                                <img className="image" src={SnowInMay}></img>
                                <div className="image-overlay">
                                    {getDescriptionFromName("Snow in May", "specialty_drinks")}
                                </div>
                            </div>
                        </Grid>
                        <Grid xs={6}>
                            <div className="image-container" style={styles.featuredItemsGridStyles}>
                                <img className="image" src={TheSpiderQueen}></img>
                                <div className="image-overlay">
                                    {getDescriptionFromName("The Spider Queen", "specialty_drinks")}
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                {renderMenu(darkMode)}
                {renderBottomBar(darkMode)}
            </div>
    
        );
    }
    else if(!darkMode) {
        return (
            <div style={styles.darkBackgroundStyles}>
                <div>
                    <img style={styles.cloudsStyles} src={DarkClouds}></img>
                </div>
                <Rain />
                <div>
                    <img style={styles.imageStyle} src={VengefulBeansPixelArt}></img>
                </div>
                <div style={styles.darkScheduleStyles}>
                    {schedule+location}
                </div>
                <div style={styles.darkFeaturedItemsStyles}>
                    {featuredItems}
                    <Grid container spacing={4}>
                        <Grid xs={6}>
                            <div className="dark-image-container" style={styles.darkFeaturedItemsGridStyles}>
                                <img className="image" src={SnowInMay}></img>
                                <div className="dark-image-overlay">
                                    {getDescriptionFromName("Snow in May", "specialty_drinks")}
                                </div>
                            </div>
                        </Grid>
                        <Grid xs={6}>
                            <div className="dark-image-container" style={styles.darkFeaturedItemsGridStyles}>
                                <img className="image" src={TheSpiderQueen}></img>
                                <div className="dark-image-overlay">
                                    {getDescriptionFromName("The Spider Queen", "specialty_drinks")}
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                {renderMenu(darkMode)}
                {renderBottomBar(darkMode)}
            </div>
        )
    }
    else
        return
}

const Home = () => {
    return (
        <ThemeContext.Consumer>
            {({theme}) => (
                renderHome(theme)
            )}
        </ThemeContext.Consumer>
    );
};
 
export default Home;