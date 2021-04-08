import React from "react";
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
	SidebarRoute,
	SideBtnWrap,
} from "./SidebarElements";

interface Props {
	isOpen: boolean;
	toggle: () => void;
}

const Sidebar: React.FC<Props> = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to="/about" onClick={toggle}>
						About
					</SidebarLink>
					<SidebarLink to="/about" onClick={toggle}>
						About
					</SidebarLink>
					<SidebarLink to="/about" onClick={toggle}>
						About
					</SidebarLink>
					<SidebarLink to="/about" onClick={toggle}>
						About
					</SidebarLink>
				</SidebarMenu>
				<SideBtnWrap>
					<SidebarRoute to="/signin">Sign In</SidebarRoute>
				</SideBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
