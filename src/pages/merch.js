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
import { OurStoryText } from "../components/styles.js";
 
const getDescriptionFromName = (merchItemName) => {
    const {merch} = merchData;
    console.log(merch)
    const item = merch.find((item) => item.id === merchItemName);
    const itemString = item.description + "\n\n" + item.price
    return item ? itemString : null;
}

const Merch = () => {
    return (
        <div style={styles.backgroundStyles}>
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
            {renderBottomBar()}
        </div>

    );
};
 
export default Merch;