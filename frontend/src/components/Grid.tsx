import React, { useState } from "react";
import styled from "styled-components";
import BookContainer from "./BookContainer";

interface Props {}

const StyledGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: repeat(auto-fill, 250px);
`;

const Grid: React.FC<Props> = () => {
	const [bla, setBla] = useState([1, 2, 3, 4, 5, 6]);

	return (
		<StyledGrid>
			{bla.map((num) => {
				return <BookContainer></BookContainer>;
			})}
		</StyledGrid>
	);
};

export default Grid;
