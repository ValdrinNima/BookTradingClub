import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
	background-color: #333333;
	height: 60px;
	margin-top: -80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	position: sticky;
	top: 0;
	z-index: 10;

	@media screen and (max-width: 960px) {
		transition: 0.8s all ease;
	}
`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	z-index: 1;
	width: 100%;
	padding: 0 2em;
	max-width: 1100px;
`;

export const NavLogo = styled(Link)`
	color: #fff;
	justify-self: flex-start;
	cursor: pointer;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	margin-left: 24px;
	font-weight: bold;
	text-decoration: none;
`;

export const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: -5px;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
		color: #fff;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	justify-content: center;
	list-style: none;
	text-align: center;
	margin-right: -22px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavItem = styled.li`
	height: 80px;
`;

export const NavLink = styled(Link)`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1em;
	height: 100%;
	cursor: pointer;

	&active {
		color: #206a5d;
	}
`;

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavBtnLink = styled(Link)`
	border-radius: 50px;
	background: #206a5d;
	white-space: nowrap;
	padding: 0.4em 0.7em;
	margin: 0 0.4em;
	color: #fff;
	font-size: 1.2rem;
	outline: none;
	border: none;
	text-decoration: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	&hover {
		transition: all 0.2s ease-in-out;
		background: #fff;
		color: #010606;
	}
`;
