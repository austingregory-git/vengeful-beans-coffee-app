import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
background: #ffffff;
height: 10vh;
width: 100%;
display: flex;
justify-content: center;
z-index: 12;
`;

export const NavLink = styled(Link)`
color: #000000;
display: flex;
align-items: center;
font-size: 1.5em;
font-family: Bradley Hand,cursive;
font-weight: 500;
text-decoration: none;
margin: 0.5rem 2rem;
padding: 0 1.5rem;
height: 100%;
cursor: pointer;

&:hover {
	color: #ffaec8;
    filter: brightness(0.85);
}

// &.active {
// 	color: #ffaec8;
// }

@media screen and (max-width: 768px) {
	display: flex;
	margin: 0.2rem 0;
	padding: 0 1rem;
	font-size: 1.25em;
	cursor: pointer;
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
margin: auto;
align-items: center;
white-space: nowrap;
@media screen and (max-width: 768px) {
	display: flex;
	top: 0;
	right: 0;
	font-size: 1em;
	cursor: pointer;
}
`;
