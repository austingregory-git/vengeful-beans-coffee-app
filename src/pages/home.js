import React from "react";
import './home.css'
import Grid from '@mui/material/Unstable_Grid2'
import VengefulBeansPixelArt from "../VengefulBeansCoffeeShopPixelArt.png"
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

const schedule = "Schedule:\n\nMonday - Friday: 6am - 6pm\nSaturday - Sunday: 6am - 8pm\n\n";
const location = "Location:\n\n722 Paramore St.";
const featuredItems = "Featured Items\n\n";

const getDescriptionFromName = (menuItemName, menuItemType) => {
    const { items } = menuData[menuItemType]
    const item = items.find((item) => item.name === menuItemName);
    const itemString = item.name + "\n\n" + item.description
    return item ? itemString : null;
}

const Home = () => {
    return (
        <div style={styles.backgroundStyles}>
            <div>
                <img style={styles.cloudsStyles} src={Clouds}></img>
            </div>
            <Snow />
            <div>
                <img style={styles.imageStyle} src={VengefulBeansPixelArt}></img>
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
            {renderMenu()}
            {renderBottomBar()}
        </div>

    );
};
 
export default Home;