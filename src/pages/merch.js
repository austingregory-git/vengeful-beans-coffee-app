import React from "react";
import * as styles from "../components/styles.js"
import { renderBottomBar } from "../components/renderBottomBar.js";
 
const Merch = () => {
    return (
        <div style={styles.backgroundStyles}>
            {renderBottomBar()}
        </div>

    );
};
 
export default Merch;