import styled from "styled-components";

export const RequestContainer = styled.div`
	padding: 1em;
	margin: 0.5em 0 0.5em;
	min-height: 100px; // TODO: remove this
	border: 1px solid #ccc;
	border-radius: 5px;
`;

export const RequestWrap = styled.div`
	display: flex;
`;

export const RequestGiveContainer = styled.div`
	padding: 1em;
	width: 100%;
	min-height: 100px;
`;

export const RequestTakeContainer = styled.div`
	padding: 1em;
	width: 100%;
	min-height: 100px; // TODO: remove this
`;

export const RequestGiveWrap = styled.div`
	display: flex;
	flex-direction: column;
`;

export const RequestTakeWrap = styled.div`
	display: flex;
	flex-direction: column;
`;
export const GiveText = styled.p``;

export const TakeText = styled.p``;
