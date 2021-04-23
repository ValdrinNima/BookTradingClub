import React from "react";
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLink,
	NavBtn,
	NavBtnLink,
} from "./NavbarElement";
import { FaBars } from "react-icons/fa";

interface Props {
	toggle: () => void;
}

const Navbar: React.FC<Props> = ({ toggle }) => {
	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/">BookTrading</NavLogo>
					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLink to="/books">Books</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="/requests">Requests</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="/trades">Trades</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="/users">Users</NavLink>
						</NavItem>
					</NavMenu>
					<NavBtn>
						<NavBtnLink to="/login">Log in</NavBtnLink>
						<NavBtnLink to="/register">Sign in</NavBtnLink>
					</NavBtn>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default Navbar;
