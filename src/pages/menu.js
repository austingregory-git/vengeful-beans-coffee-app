import React from "react";
import * as styles from "../components/styles.js"
import { renderMenu } from "../components/renderMenu.js";
import { renderBottomBar } from "../components/renderBottomBar.js";
 
const Menu = () => {
    return (
        <div style={styles.backgroundStyles}>
            {renderMenu()}
            {renderBottomBar()}
        </div>

    );
};
 
export default Menu;