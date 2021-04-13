import React from "react";
import {
	RequestContainer,
	RequestWrap,
	RequestGive,
	GiveText,
	RequestTake,
	TakeText,
} from "./RequestItemElements";

interface Props {}

const RequestItem: React.FC<Props> = () => {
	return (
		<RequestContainer>
			<RequestWrap>
				<RequestGive>
					<GiveText></GiveText>
					{/* map */}
				</RequestGive>
				<RequestTake>
					<TakeText></TakeText>
					{/* map */}
				</RequestTake>
			</RequestWrap>
		</RequestContainer>
	);
};

export default RequestItem;
