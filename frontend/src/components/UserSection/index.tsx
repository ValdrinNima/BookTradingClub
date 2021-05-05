import React, { useState } from "react";
import { MainContainer } from "../../shared/MainContainer";
import { MainWrap } from "../../shared/MainWrap";
import User from "./User";
import { UserList } from "./UserSectionElements";

interface Props {}

const UserSection: React.FC<Props> = () => {
	const [users, setUsers] = useState([1, 2, 3, 4, 5]);

	return (
		<MainContainer>
			<MainWrap>
				<UserList>
					{users.map((user) => {
						return <User></User>;
					})}
				</UserList>
			</MainWrap>
		</MainContainer>
	);
};

export default UserSection;
