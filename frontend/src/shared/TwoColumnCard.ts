import styled from "styled-components";

export const Container = styled.div`
	padding: 1em;
	margin: 0.5em 0 0.5em;
	min-height: 100px; // TODO: remove this
	border: 1px solid #ccc;
	border-radius: 5px;
`;

export const Wrap = styled.div`
	display: flex;
`;

export const GiveContainer = styled.div`
	padding: 1em;
	width: 100%;
	min-height: 100px;
`;

export const TakeContainer = styled.div`
	padding: 1em;
	width: 100%;
	min-height: 100px; // TODO: remove this
`;

export const GiveWrap = styled.div`
	display: flex;
	flex-direction: column;
`;

export const TakeWrap = styled.div`
	display: flex;
	flex-direction: column;
`;
export const GiveText = styled.p``;

export const TakeText = styled.p``;
