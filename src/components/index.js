import React from "react";
import { Bars, Nav, NavLink, NavMenu } from "./NavbarElements";

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