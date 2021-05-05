import React from "react";
import {
	BookContainer,
	BookTitle,
	BookWrap,
	FromSpan,
	RequestNumber,
	Comment,
} from "./BookElements";

interface Props {}

const Book: React.FC<Props> = () => {
	return (
		<BookContainer>
			<BookWrap>
				<RequestNumber>Requests 5</RequestNumber>
				<BookTitle>
					Harry Potter
					<FromSpan></FromSpan>
				</BookTitle>
				<Comment>By J. K. Rowling</Comment>
			</BookWrap>
		</BookContainer>
	);
};

export default Book;
