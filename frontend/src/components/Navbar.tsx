import React from "react";
import styled from "styled-components";

interface Props {}

const Nav = styled.nav`
	width: 100%;
	height: 60px;
	background-color: ${(props) => props.theme.secondary};

	& ul {
		display: flex;
		list-style: none;
		padding: 0;
		align-self: center;
	}

	& ul a {
		color: white;
		text-decoration: none;
	}
`;

const Navbar: React.FC<Props> = () => {
	return (
		<Nav>
			<ul>
				<li>
					<a href="#">Book Exchange</a>
				</li>
				<li>
					<a href="#">Books</a>
				</li>
				<li>
					<a href="#">Requests</a>
				</li>
				<li>
					<a href="#">Trades</a>
				</li>
				<li>
					<a href="#">Users</a>
				</li>
			</ul>
		</Nav>
	);
};

export default Navbar;
