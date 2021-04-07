import React from "react";
import styled from "styled-components";

interface Props {}

const StyledHeader = styled.header``;

const Header: React.FC<Props> = ({}) => {
	return (
		<StyledHeader>
			<h1>Books available for trade</h1>
		</StyledHeader>
	);
};

export default Header;
