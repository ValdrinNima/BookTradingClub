import React, { useState } from "react";
import { MainContainer } from "../../shared/MainContainer";
import { MainWrap } from "../../shared/MainWrap";
import RequestItem from "./RequestItem";
import { RequestList } from "./RequestsElements";

interface Props {}

const RequestsSection: React.FC<Props> = () => {
	const [requests, setRequests] = useState<number[]>([1, 2, 3, 4, 5]);

	return (
		<MainContainer>
			<MainWrap>
				<RequestList>
					{requests.map((request) => {
						return <RequestItem key={request}></RequestItem>;
					})}
				</RequestList>
			</MainWrap>
		</MainContainer>
	);
};

export default RequestsSection;
