import React from "react";
import {
	BookItemContainer,
	BookItemWrap,
	BookItemImage,
	BookItemInfo,
	BookItemTitle,
	BookItemAuthor,
	BookItemDescription,
	BookOverview,
} from "./BookItemElements";
import image from "../../../images/test.jpg";

interface Props {}

const BookItem: React.FC<Props> = () => {
	return (
		<BookItemContainer>
			<BookItemWrap>
				<BookOverview />
				<BookItemImage src={image} />
				<BookItemInfo>
					<BookItemTitle />
					<BookItemAuthor />
					<BookItemDescription />
				</BookItemInfo>
			</BookItemWrap>
		</BookItemContainer>
	);
};

export default BookItem;
