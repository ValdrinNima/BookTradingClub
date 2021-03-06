import styled from "styled-components";

export const BookItemContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2em 0 3em;
`;

export const BookOverview = styled.div`
	background-color: #fff;
	border-radius: 3px;
	padding: 2rem;
	position: absolute;
	max-height: 100%;
	min-height: 50%;
	overflow: auto;
	left: 0;
	bottom: 0;
	right: 0;
	transform: translateY(100%);
	transition: transform 0.2s ease-in;
`;

export const BookItemWrap = styled.div`
	box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.5);
	overflow: hidden;
	position: relative;
	/* width: 270px; */
	height: 300px;
	border-radius: 7px;

	&:hover ${BookOverview} {
		transform: translateY(0);
	}
`;

export const BookItemImage = styled.img`
	width: 100%;
	height: 81%;
	object-fit: cover;
`;

export const BookItemInfo = styled.div`
	color: #eee;
	background-color: #206a5d;
	width: 100%;
	height: 20%;
	display: flex;
	position: absolute;
	top: 80%;
	/* align-items: center; */
	/* justify-content: space-between; */
	/* padding: 0.5rem 1rem 1rem; */
	/* letter-spacing: 0.5px; */
`;

export const BookItemTitle = styled.h2``;

export const BookItemAuthor = styled.h2``;

export const BookItemDescription = styled.h2``;
