import React from "react";
import './home.css'
import Grid from '@mui/material/Unstable_Grid2'
import VengefulBeansPixelArt from "../VengefulBeansCoffeeShopPixelArt.png"

const backgroundStyles = {
    width: "100%",
    height: "100vh",
    background: '#ffaec8',
};

const imageStyle = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "100vw",
    width: "100%",
    height: "100%",
    maxWidth: 788,
    maxHeight: 328,
    border: "1px solid black"
};

const scheduleStyles = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "100vw",
    padding: "20px 0",
    width: "100%",
    height: "100%",
    maxWidth: 788,
    maxHeight: 328,
    border: "1px solid black",
    background: "#d69e6e",
    color: "#000000",
    fontSize: "1.5em",
    fontFamily: "Century Gothic,CenturyGothic,AppleGothic,sans-serif",
    textAlign: "center",
    whiteSpace: "pre-line",
}

const schedule = "\nSchedule:\n\nMonday - Friday: 6am - 6pm\nSaturday - Sunday: 6am - 8pm\n\n"
const location = "Location:\n\n722 Paramore St."

const Home = () => {
    return (
        <div style={backgroundStyles}>
            <div className='banner'>
                <img style={imageStyle} src={VengefulBeansPixelArt}></img>
            </div>
            <div style={scheduleStyles}>
                {schedule+location}
            </div>
        </div>

    );
};
 
export default Home;