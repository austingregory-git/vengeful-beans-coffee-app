import React from "react";
import './home.css'
import Grid from '@mui/material/Unstable_Grid2'
import VengefulBeansPixelArt from "../VengefulBeansCoffeeShopPixelArt.png"
import TheSpiderQueen from "../assets/TheSpiderQueen.png"
import SnowInMay from "../assets/SnowInMay.png"
import {menuData} from "../data/menuData.js"
import {SocialIcon} from 'react-social-icons';

const backgroundStyles = {
    width: "100%",
    height: "100%",
    background: '#f4c3ce',
};

const imageStyle = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
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
    padding: "20px 0",
    width: "100%",
    height: "100%",
    maxWidth: 788,
    maxHeight: 328,
    border: "1px solid black",
    background: "#d69e6e",
    color: "#000000",
    fontSize: "1.5em",
    fontFamily: "Bradley Hand,cursive",
    textAlign: "center",
    whiteSpace: "pre-line",
};

const featuredItemsStyles = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "20px 0",
    width: "100%",
    height: "100%",
    maxWidth: 788,
    maxHeight: 424,
    border: "1px solid black",
    background: "#ffaec8",
    color: "#000000",
    fontSize: "1.5em",
    fontFamily: "Bradley Hand,cursive",
    textAlign: "center",
    whiteSpace: "pre-line",
};

const menuStyles = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "20px 0",
    width: "100%",
    height: "100%",
    maxWidth: 788,
    maxHeight: "100vh",
    border: "1px solid black",
    background: "#d69e6e",
    color: "#000000",
    fontSize: "1.5em",
    fontFamily: "Bradley Hand,cursive",
    textAlign: "center",
    whiteSpace: "pre-line",
};

const menuCategoryStyles = {
    padding: "10px 0",
    fontSize: "1em",
    fontFamily: "Bradley Hand,cursive",
    textAlign: "center",
    whiteSpace: "pre-line",
    background: "#ffaec8",
};

const menuItemStyles = {
    fontSize: "0.75em",
    fontFamily: "Bradley Hand,cursive",
    textAlign: "center",
    whiteSpace: "pre-line",
};

const menuItemDescriptionStyles = {
    fontSize: "0.5em",
    fontFamily: "Bradley Hand,cursive",
    textAlign: "center",
    whiteSpace: "pre-line",
};

const bottomBarStyles = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "5px 0",
    width: "100%",
    height: "100%",
    maxWidth: 788,
    maxHeight: 128,
    border: "1px solid black",
    background: "#ffaec8",
    color: "#000000",
    fontSize: "0.75em",
    fontFamily: "Bradley Hand,cursive",
    textAlign: "center",
    whiteSpace: "pre-line",
};

const featuredItemsGridStyles = {
    '&:hover': {
        '& .image-overlay': {
            display: 'block',
        },
    },
};

const menuGridStyles = {
    padding: "10px 0"
};

const socialMediaIconStyles = {
    marginRight: "5px",
    marginLeft: "5px"
}

const schedule = "Schedule:\n\nMonday - Friday: 6am - 6pm\nSaturday - Sunday: 6am - 8pm\n\n";
const location = "Location:\n\n722 Paramore St.";
const featuredItems = "Featured Items\n\n";
const menu = "Menu\n\n"
const bottomBar = "© 2023 Vengeful Beans Coffee\n\n"

const getDescriptionFromName = (menuItemName, menuItemType) => {
    const { items } = menuData[menuItemType]
    const item = items.find((item) => item.name === menuItemName);
    const itemString = item.name + "\n\n" + item.description
    return item ? itemString : null;
}

const fillMenuItems = (menuCategory) => {
    const {items} = menuData[menuCategory];
    var menuItems = [];
    if (items) {
      items.forEach((item) => {
        const menuItem = renderMenuItem(item.name, item.description, item.price);
        menuItems.push(menuItem);
      });
    }
    return menuItems;
};

const renderMenuItem = (menuItemName, menuItemDescription, menuItemPrice) => {
    const menuItemString = menuItemName + ".........." + menuItemPrice;
    return (
        <Grid xs={6}>
            <div style={menuItemStyles}>
                {menuItemString}
            </div>
            <div style={menuItemDescriptionStyles}>
                {menuItemDescription}
            </div>
        </Grid>
    )
}

const renderMenuCategory = (menuCategoryName) => {
    const {displayName} = menuData[menuCategoryName];
    return (
        <div style={menuCategoryStyles}>{displayName}</div>
    )
}

const renderMenu = () => {
    return Object.entries(menuData).map(([categoryName, categoryData]) => (
      <React.Fragment key={categoryName}>
        <div style={{ border: "1px solid black" }}></div>
        {renderMenuCategory(categoryName)}
        <Grid style={menuGridStyles} container spacing={4}>
          {fillMenuItems(categoryName)}
        </Grid>
      </React.Fragment>
    ));
}

const Home = () => {
    return (
        <div style={backgroundStyles}>
            <div className='banner'>
                <img style={imageStyle} src={VengefulBeansPixelArt}></img>
            </div>
            <div style={scheduleStyles}>
                {schedule+location}
            </div>
            <div style={featuredItemsStyles}>
                {featuredItems}
                <Grid container spacing={4}>
                    <Grid xs={6}>
                        <div className="image-container" style={featuredItemsGridStyles}>
                            <img className="image" src={SnowInMay}></img>
                            <div className="image-overlay">
                                {getDescriptionFromName("Snow in May", "specialty_drinks")}
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={6}>
                        <div className="image-container" style={featuredItemsGridStyles}>
                            <img className="image" src={TheSpiderQueen}></img>
                            <div className="image-overlay">
                                {getDescriptionFromName("The Spider Queen", "specialty_drinks")}
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div style={menuStyles}>
                {menu}
                <div>{renderMenu()}</div>
            </div>
            <div style={bottomBarStyles}>
                {bottomBar}
                <SocialIcon style={socialMediaIconStyles} url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" network="instagram"/>
                <SocialIcon style={socialMediaIconStyles} url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" network="facebook"/>
                <SocialIcon style={socialMediaIconStyles} url="https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT?si=fdae361784b94a2f" network="spotify"/>
                
            </div>
        </div>

    );
};
 
export default Home;