import React from "react";
import { Bars, Nav, NavLink, NavMenu } from "./NavbarElements";
import VengefulBeansLogo from "../assets/VengefulBeansCoffeeShopLogo2.png"
//.75 width 222
//.75 height 246


const imageStyle = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: "50%",
  maxHeight: "50%",
  width: 148,
  height: 164,
};

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/home">
                        Home
                    </NavLink>
                    <NavLink to="/menu">
                        Menu
                    </NavLink>
                    <NavLink to="/ourstory">
                        Our Story
                    </NavLink>
                    <NavLink to="/merch">
                        Merch
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;