import React from "react";
import Grid from '@mui/material/Unstable_Grid2'
import {menuData} from "../data/menuData.js"
import * as styles from '../components/styles.js'

const menu = "Menu\n\n"

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
            <div style={styles.menuItemStyles}>
                {menuItemString}
            </div>
            <div style={styles.menuItemDescriptionStyles}>
                {menuItemDescription}
            </div>
        </Grid>
    )
}

const renderMenuCategory = (menuCategoryName, darkMode) => {
    const {displayName} = menuData[menuCategoryName];
    if(!darkMode) {
        return (
            <div style={styles.darkMenuCategoryStyles}>{displayName}</div>
        )
    }
    else if(darkMode) {
        return (
            <div style={styles.menuCategoryStyles}>{displayName}</div>
        )
    }
}

export const renderMenuItems = (darkMode) => {
    return Object.entries(menuData).map(([categoryName, categoryData]) => (
        <React.Fragment key={categoryName}>
            <div style={{ border: "1px solid black" }}></div>
            {renderMenuCategory(categoryName, darkMode)}
            <Grid style={styles.menuGridStyles} container spacing={4}>
                {fillMenuItems(categoryName, darkMode)}
            </Grid>
        </React.Fragment>
    ));}

export const renderMenu = (darkMode) => {
    if(!darkMode) {
        return (
            <div style={styles.darkMenuStyles}>
                {menu}
                <div>
                   {renderMenuItems(darkMode)}
                </div>
            </div>
        )
    }
    else if(darkMode) {
        return (
            <div style={styles.menuStyles}>
                {menu}
                <div>
                   {renderMenuItems(darkMode)}
                </div>
            </div>
        )
    }

}