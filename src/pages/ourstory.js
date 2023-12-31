import React from "react";
import * as styles from "../components/styles.js"
import { OurStoryText, OurStoryLore, DarkOurStoryText, DarkOurStoryLore } from "../components/styles.js";
import { renderBottomBar } from "../components/renderBottomBar.js";
import AbigailAndFee from "../assets/abigailandfee.png";
import FreyaPlaying from "../assets/FreyaPlaying.jpg";
import FreyaWorking from "../assets/FreyaWorking.jpg";
import UdonSleeping from "../assets/UdonSleeping.jpg";
import VengefulBeansCoffeeShopLogo from "../assets/VengefulBeansCoffeeShopLogo2.png"
import { aboutVengefulBeansOwner, aboutVengefulBeansCoffee, aboutFreya, aboutUdon1, aboutUdon2, aboutVengefulBeansLore } from "../data/ourStoryData.js";
import Grid from '@mui/material/Unstable_Grid2'
import Snow from "../components/renderSnow.js"
import Rain from "../components/renderRain.js"
import Clouds from "../assets/LongerClouds.png"
import DarkClouds from "../assets/LongerDarkClouds.png"
import { ThemeContext } from '../context/themeContext.js';
 
const renderOurStory= (darkMode) => {
    if(darkMode) {
        return (
            <div style={styles.backgroundStyles}>
                <div>
                    <img style={styles.cloudsStyles} src={Clouds}></img>
                </div>
                <Snow />
                <div style={styles.ourStoryPinkContainerStyles}>
                    <OurStoryText>Our Leader</OurStoryText>
                </div>
                <div style={styles.ourStoryBrownContainerStyles}>
                    <Grid container spacing={0}>
                            <Grid xs={6}>
                                <OurStoryText>{aboutVengefulBeansOwner}</OurStoryText>
                            </Grid>
                            <Grid xs={6}>
                                <img style={styles.abigailAndFeeImageStyles} src={AbigailAndFee}></img>
                            </Grid>
                    </Grid>
                </div>
                <div style={styles.ourStoryPinkContainerStyles}>
                    <OurStoryText>{aboutVengefulBeansCoffee}</OurStoryText>
                </div>
                <div style={styles.ourStoryBrownContainerStyles}>
                    <OurStoryText>Our Team</OurStoryText>
                </div>
                <div style={styles.ourStoryPinkContainerStyles}>
                    <Grid container spacing={0}>
                            <Grid xs={4}>
                                <img style={styles.abigailAndFeeImageStyles} src={FreyaWorking}></img>
                            </Grid>
                            <Grid xs={4}>
                                <OurStoryText>{aboutFreya}</OurStoryText>
                            </Grid>
                            <Grid xs={4}>
                                <img style={styles.abigailAndFeeImageStyles} src={FreyaPlaying}></img>
                            </Grid>
                    </Grid>
                </div>
                <div style={styles.ourStoryBrownContainerStyles}>
                    <Grid container spacing={0}>
                            <Grid xs={4}>
                                <OurStoryText>{aboutUdon1}</OurStoryText>
                            </Grid>
                            <Grid xs={4}>
                                <img style={styles.abigailAndFeeImageStyles} src={UdonSleeping}></img>
                            </Grid>
                            <Grid xs={4}>
                                <OurStoryText>{aboutUdon2}</OurStoryText>
                            </Grid>
                    </Grid>
                </div>
                <div style={styles.ourStoryPinkContainerStyles}>
                    <OurStoryText>Our Beans</OurStoryText>
                </div>
                <div style={styles.ourStoryBrownContainerStyles}>
                    <Grid container spacing={0}>
                            <Grid xs={6}>
                                <img style={styles.abigailAndFeeImageStyles} src={VengefulBeansCoffeeShopLogo}></img>
                            </Grid>
                            <Grid xs={6}>
                                <OurStoryLore>{aboutVengefulBeansLore}</OurStoryLore>
                            </Grid>
                    </Grid>
                </div>
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
                <div style={styles.ourStoryPurpleContainerStyles}>
                    <DarkOurStoryText>Our Leader</DarkOurStoryText>
                </div>
                <div style={styles.ourStoryGrayContainerStyles}>
                    <Grid container spacing={0}>
                            <Grid xs={6}>
                                <DarkOurStoryText>{aboutVengefulBeansOwner}</DarkOurStoryText>
                            </Grid>
                            <Grid xs={6}>
                                <img style={styles.abigailAndFeeImageStyles} src={AbigailAndFee}></img>
                            </Grid>
                    </Grid>
                </div>
                <div style={styles.ourStoryPurpleContainerStyles}>
                    <DarkOurStoryText>{aboutVengefulBeansCoffee}</DarkOurStoryText>
                </div>
                <div style={styles.ourStoryGrayContainerStyles}>
                    <DarkOurStoryText>Our Team</DarkOurStoryText>
                </div>
                <div style={styles.ourStoryPurpleContainerStyles}>
                    <Grid container spacing={0}>
                            <Grid xs={4}>
                                <img style={styles.abigailAndFeeImageStyles} src={FreyaWorking}></img>
                            </Grid>
                            <Grid xs={4}>
                                <DarkOurStoryText>{aboutFreya}</DarkOurStoryText>
                            </Grid>
                            <Grid xs={4}>
                                <img style={styles.abigailAndFeeImageStyles} src={FreyaPlaying}></img>
                            </Grid>
                    </Grid>
                </div>
                <div style={styles.ourStoryGrayContainerStyles}>
                    <Grid container spacing={0}>
                            <Grid xs={4}>
                                <DarkOurStoryText>{aboutUdon1}</DarkOurStoryText>
                            </Grid>
                            <Grid xs={4}>
                                <img style={styles.abigailAndFeeImageStyles} src={UdonSleeping}></img>
                            </Grid>
                            <Grid xs={4}>
                                <DarkOurStoryText>{aboutUdon2}</DarkOurStoryText>
                            </Grid>
                    </Grid>
                </div>
                <div style={styles.ourStoryPurpleContainerStyles}>
                    <DarkOurStoryText>Our Beans</DarkOurStoryText>
                </div>
                <div style={styles.ourStoryGrayContainerStyles}>
                    <Grid container spacing={0}>
                            <Grid xs={6}>
                                <img style={styles.abigailAndFeeImageStyles} src={VengefulBeansCoffeeShopLogo}></img>
                            </Grid>
                            <Grid xs={6}>
                                <DarkOurStoryLore>{aboutVengefulBeansLore}</DarkOurStoryLore>
                            </Grid>
                    </Grid>
                </div>
                {renderBottomBar(darkMode)}
            </div>
        )
    }
}

const OurStory = () => {
    return (
        <ThemeContext.Consumer>
            {({theme}) => (
                renderOurStory(theme)
            )}
        </ThemeContext.Consumer>
    );
};
 
export default OurStory;