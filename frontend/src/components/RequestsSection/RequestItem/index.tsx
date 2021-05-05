import React, { useState } from "react";
import Book from "../Book";
import {
	RequestContainer,
	RequestWrap,
	RequestGiveContainer,
	GiveText,
	TakeText,
	RequestGiveWrap,
	RequestTakeContainer,
	RequestTakeWrap,
} from "./RequestItemElements";

interface Props {}

const RequestItem: React.FC<Props> = () => {
	const [books, setBooks] = useState([1, 2, 3, 4, 5]);

	return (
		<RequestContainer>
			<RequestWrap>
				<RequestGiveContainer>
					<GiveText>I want to give</GiveText>
					<RequestGiveWrap>
						{books.map((num) => {
							return <Book></Book>;
						})}
					</RequestGiveWrap>
				</RequestGiveContainer>
				<RequestTakeContainer>
					<TakeText>and wants to take</TakeText>
					<RequestTakeWrap>
						{books.map((num) => {
							return <Book></Book>;
						})}
					</RequestTakeWrap>
				</RequestTakeContainer>
			</RequestWrap>
		</RequestContainer>
	);
};

export default RequestItem;
