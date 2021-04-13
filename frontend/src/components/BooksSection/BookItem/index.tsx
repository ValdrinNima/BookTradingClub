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
				<BookItemImage src={image} />
				<BookItemInfo>
					<BookItemTitle />
					<BookItemAuthor />
					<BookItemDescription />
				</BookItemInfo>
				<BookOverview />
			</BookItemWrap>
		</BookItemContainer>
	);
};

export default BookItem;
