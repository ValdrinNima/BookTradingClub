import React from "react";
import styled from "styled-components";

interface Props {}

const StyledBookContainer = styled.div`
	height: 100px;
	width: 200px;
	background-color: red;
`;

const BookContainer: React.FC<Props> = ({}) => {
	return <StyledBookContainer></StyledBookContainer>;
};

export default BookContainer;
