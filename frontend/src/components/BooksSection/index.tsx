import React, { useState } from "react";
import { MainContainer } from "../../shared/MainContainer";
import { MainWrap } from "../../shared/MainWrap";
import BookItem from "./BookItem";
import { BooksGrid } from "./BooksElements";

interface Props {}

const BooksSection: React.FC<Props> = () => {
	const [books, ] = useState<number[]>([1, 2, 3, 4, 5, 6]);

	return (
		<MainContainer>
			<MainWrap>
				<BooksGrid>
					{books.map((book) => {
						return <BookItem key={book}></BookItem>;
					})}
				</BooksGrid>
			</MainWrap>
		</MainContainer>
	);
};

export default BooksSection;
