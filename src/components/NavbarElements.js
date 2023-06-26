import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
background: #ffffff;
height: 10vh;
width: 100vw;
display: flex;
justify-content: center;
z-index: 12;
`;

export const NavLink = styled(Link)`
color: #000000;
display: flex;
align-items: center;
font-size: 1.5em;
font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif;
font-weight: bold;
text-decoration: none;
margin: 0.5rem 2rem;
padding: 0 1.5rem;
height: 100%;
cursor: pointer;

&:hover {
	color: #ffaec8;
    filter: brightness(0.85);
}

&.active {
	color: #ffaec8;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;
