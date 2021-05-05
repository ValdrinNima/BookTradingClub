import { useState } from "react";
import requests from "../../../pages/requests";
import { Container, GiveContainer, GiveText, GiveWrap, TakeContainer, TakeText, TakeWrap, Wrap } from "../../../shared/TwoColumnCard";
import Book from "../Book";

interface Props {}
const Item: React.FC<Props> = () => {
	const [books, setBooks] = useState([1, 2, 3, 4, 5]);

	return (
		<Container>
			<Wrap>
				<GiveContainer>
					<GiveText>I want to give</GiveText>
					<GiveWrap>
						{books.map((num) => {
							return <Book></Book>;
						})}
					</GiveWrap>
				</GiveContainer>
				<TakeContainer>
					<TakeText>and wants to take</TakeText>
					<TakeWrap>
						{books.map((num) => {
							return <Book></Book>;
						})}
					</TakeWrap>
				</TakeContainer>
			</Wrap>
		</Container>
	);
};

export default Item;
