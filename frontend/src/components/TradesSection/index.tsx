import React, { useState } from "react"
import { MainContainer } from "../../shared/MainContainer";
import { MainWrap } from "../../shared/MainWrap";
import RequestItem from "../RequestsSection/RequestItem";
import { TradesList } from "./TradesElements";

interface Props {

}

const TradesSection: React.FC<Props> = () => {
	const [requests, setRequests] = useState<number[]>([1, 2, 3, 4, 5]);

	return (
		<MainContainer>
			<MainWrap>
				<TradesList>
					{requests.map((request) => {
						return <RequestItem key={request}></RequestItem>;
					})}
				</TradesList>
			</MainWrap>
		</MainContainer>
	);
};

export default TradesSection;
