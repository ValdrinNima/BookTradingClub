import styled from "styled-components";

export const BooksContainer = styled.div`
	margin-top: 80px;
	width: 100%;
	background-color: #2f2f34;
`;

export const BooksWrap = styled.div`
	width: 80%;
	max-width: 1000px;
	margin: 0 auto;
	padding: 2em 0 2em;
	border: 1px solid black;
`;

export const BooksGrid = styled.div`
	display: grid;
	/* grid-template-columns: 1fr 1fr 1fr; */
	grid-template-columns: repeat(auto-fit, minmax(200px, 300px));
	grid-template-rows: repeat(auto-fit, minmax(200px, 300px));
	justify-content: space-evenly;
	align-items: space-between;
`;
