import React from "react";
import { Nav, NavLink, DarkNav, DarkNavLink, NavMenu } from "./NavbarElements";

export const Navbar = () => {
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

export const DarkNavbar = () => {
    return (
        <>
            <DarkNav>
                <NavMenu>
                    <DarkNavLink to="/home">
                        Home
                    </DarkNavLink>
                    <DarkNavLink to="/menu">
                        Menu
                    </DarkNavLink>
                    <DarkNavLink to="/ourstory">
                        Our Story
                    </DarkNavLink>
                    <DarkNavLink to="/merch">
                        Merch
                    </DarkNavLink>
                </NavMenu>
            </DarkNav>
        </>
    );
};


