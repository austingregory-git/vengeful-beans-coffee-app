import React from "react";
import * as styles from "../components/styles.js"
import { OurStoryText, OurStoryLore } from "../components/styles.js";
import { renderBottomBar } from "../components/renderBottomBar.js";
import AbigailAndFee from "../assets/abigailandfee.png";
import FreyaPlaying from "../assets/FreyaPlaying.jpg";
import FreyaWorking from "../assets/FreyaWorking.jpg";
import UdonSleeping from "../assets/UdonSleeping.jpg";
import VengefulBeansCoffeeShopLogo from "../assets/VengefulBeansCoffeeShopLogo2.png"
import Grid from '@mui/material/Unstable_Grid2'

const aboutVengefulBeansOwner = "Vengeful Beans Coffee is owned and operated by our fearless leader, Abigail. She has been honing her potion-making craft for years, resulting in a perfect blend of aesthetics and delicious taste."
const aboutVengefulBeansCoffee = "At Vengeful Beans Coffee, we pride ourselves on our dedication to the art of alchemy. Experimentation and curiosity has led us to discover concoctions for any mood. Whether you need to be energized, relaxed, or hyped up—we have a delicious drink for you!"
const aboutFreya = "Freya is the guardian of Vengeful Beans Coffee. She is suspected to be omnipotent."
const aboutUdon1 = "Udon is just happy to be involved."
const aboutUdon2 = "He is a certified noodle :)"
const aboutVengefulBeansLore = "Years ago, the homeland of our coffee beans were invaded by corporate coffee shops, stealing their friends and family, and roasting them into bland drinks. The survivors banded together to rebel against the evil empire and chose Abigail as their leader. Their mission is simple: vengeance."
 
const OurStory = () => {
    return (
        <div style={styles.backgroundStyles}>
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
            {renderBottomBar()}
        </div>
    );
};
 
export default OurStory;