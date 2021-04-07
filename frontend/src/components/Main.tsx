import React from "react";
import styled from "styled-components";

interface Props {}

const MainContent = styled.main``;

const Main: React.FC<Props> = ({ children }) => {
	return <MainContent>{children}</MainContent>;
};

export default Main;
