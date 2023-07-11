import React from "react";
import * as styles from "../components/styles.js"
import Grid from '@mui/material/Unstable_Grid2'
import { renderBottomBar } from "../components/renderBottomBar.js";
import LongSleeve from "../assets/merch/VengefulBeansCoffeeLongSleeve.PNG"
import ShortSleeve from "../assets/merch/VengefulBeansCoffeeShirtPink.PNG"
import CropTop from "../assets/merch/VengefulBeansCoffeeCropTop.PNG"
import Hoodie from "../assets/merch/VengefulBeansCoffeeHoodie.PNG"
import Hat from "../assets/merch/VengefulBeansCoffeeHat.PNG"
import Mug from "../assets/merch/VengefulBeansCoffeeMug.PNG"
import "./home.css"
import {merchData} from "../data/merchData.js"
import { OurStoryText, DarkOurStoryText } from "../components/styles.js";
import { ThemeContext, themes } from '../context/themeContext.js';
import Snow from "../components/renderSnow.js"
import Rain from "../components/renderRain.js"
import Clouds from "../assets/LongerClouds.png"
import DarkClouds from "../assets/LongerDarkClouds.png"
 
const getDescriptionFromName = (merchItemName) => {
    const {merch} = merchData;
    const item = merch.find((item) => item.id === merchItemName);
    const itemString = item.description + "\n\n" + item.price
    return item ? itemString : null;
}

const renderMerch = (darkMode) => {
    if(darkMode) {
        return (
            <div style={styles.backgroundStyles}>
                <div>
                    <img style={styles.cloudsStyles} src={Clouds}></img>
                </div>
                <Snow />
                <div style={styles.ourStoryBrownContainerStyles}>
                    <OurStoryText>Merch</OurStoryText>
                </div>
                <div style={styles.merchItemsStyles}>
                    <Grid container spacing={0}>
                        <Grid xs={6}>
                            <a href="https://www.shopify.com/">
                                <div className="image-container" style={styles.merchItemsGridStyles}>
                                    <img className="image" src={LongSleeve}></img>
                                    <div className="image-overlay">
                                        {getDescriptionFromName("LongSleeve")}
                                    </div>
                                </div>
                            </a>
                        </Grid>
                        <Grid xs={6}>
                            <a href="https://www.shopify.com/">
                                <div className="image-container" style={styles.merchItemsGridStyles}>
                                    <img className="image" src={ShortSleeve}></img>
                                    <div className="image-overlay">
                                        {getDescriptionFromName("ShortSleeve")}
                                    </div>
                                </div>
                            </a>
                        </Grid>
                        <Grid xs={6}>
                            <a href="https://www.shopify.com/">
                                <div className="image-container" style={styles.merchItemsGridStyles}>
                                    <img className="image" src={CropTop}></img>
                                    <div className="image-overlay">
                                        {getDescriptionFromName("CropTop")}
                                    </div>
                                </div>
                            </a>
                        </Grid>
                        <Grid xs={6}>
                            <a href="https://www.shopify.com/">
                                <div className="image-container" style={styles.merchItemsGridStyles}>
                                    <img className="image" src={Hoodie}></img>
                                    <div className="image-overlay">
                                        {getDescriptionFromName("Hoodie")}
                                    </div>
                                </div>
                            </a>
                        </Grid>
                        <Grid xs={6}>
                            <a href="https://www.shopify.com/">
                                <div className="image-container" style={styles.merchItemsGridStyles}>
                                    <img className="image" src={Hat}></img>
                                    <div className="image-overlay">
                                        {getDescriptionFromName("Hat")}
                                    </div>
                                </div>
                            </a>
                        </Grid>
                        <Grid xs={6}>
                            <a href="https://www.shopify.com/">
                                <div className="image-container" style={styles.merchItemsGridStyles}>
                                    <img className="image" src={Mug}></img>
                                    <div className="image-overlay">
                                        {getDescriptionFromName("Mug")}
                                    </div>
                                </div>
                            </a>
                        </Grid>
                    </Grid>
                </div>
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
                <div style={styles.ourStoryGrayContainerStyles}>
                    <DarkOurStoryText>Merch</DarkOurStoryText>
                </div>
                <div style={styles.merchItemsStyles}>
                    <Grid container spacing={0}>
                        <Grid xs={6}>
                            <a href="https://www.shopify.com/">
                                <div className="dark-image-container" style={styles.merchItemsGridStyles}>
                                    <img className="image" src={LongSleeve}></img>
                                    <div className="dark-image-overlay">
                                        {getDescriptionFromName("LongSleeve")}
                                    </div>
                                </div>
                            </a>
                        </Grid>
                        <Grid xs={6}>
                            <a href="https://www.shopify.com/">
                                <div className="dark-image-container" style={styles.merchItemsGridStyles}>
                                    <img className="image" src={ShortSleeve}></img>
                                    <div className="dark-image-overlay">
                                        {getDescriptionFromName("ShortSleeve")}
                                    </div>
                                </div>
                            </a>
                        </Grid>
                        <Grid xs={6}>
                            <a href="https://www.shopify.com/">
                                <div className="dark-image-container" style={styles.merchItemsGridStyles}>
                                    <img className="image" src={CropTop}></img>
                                    <div className="dark-image-overlay">
                                        {getDescriptionFromName("CropTop")}
                                    </div>
                                </div>
                            </a>
                        </Grid>
                        <Grid xs={6}>
                            <a href="https://www.shopify.com/">
                                <div className="dark-image-container" style={styles.merchItemsGridStyles}>
                                    <img className="image" src={Hoodie}></img>
                                    <div className="dark-image-overlay">
                                        {getDescriptionFromName("Hoodie")}
                                    </div>
                                </div>
                            </a>
                        </Grid>
                        <Grid xs={6}>
                            <a href="https://www.shopify.com/">
                                <div className="dark-image-container" style={styles.merchItemsGridStyles}>
                                    <img className="image" src={Hat}></img>
                                    <div className="dark-image-overlay">
                                        {getDescriptionFromName("Hat")}
                                    </div>
                                </div>
                            </a>
                        </Grid>
                        <Grid xs={6}>
                            <a href="https://www.shopify.com/">
                                <div className="dark-image-container" style={styles.merchItemsGridStyles}>
                                    <img className="image" src={Mug}></img>
                                    <div className="dark-image-overlay">
                                        {getDescriptionFromName("Mug")}
                                    </div>
                                </div>
                            </a>
                        </Grid>
                    </Grid>
                </div>
                {renderBottomBar(darkMode)}
            </div>
    
        );
    }
    
}

const Merch = () => {
    return (
        <ThemeContext.Consumer>
            {({theme}) => (
                renderMerch(theme)
            )}
        </ThemeContext.Consumer>
    )
};
 
export default Merch;