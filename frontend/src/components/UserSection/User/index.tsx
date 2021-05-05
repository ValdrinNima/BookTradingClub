import React from "react"
import { UserContainer, UserWrap, UserCity, BooksAndRequests, UserName, Badge } from "./UserElements";

interface Props {

}

const User: React.FC<Props> = () => {
    return (
        <UserContainer>
            <UserWrap>
                <UserName>
                    Name
                </UserName>
                <UserCity>  
                    City
                </UserCity>
                <BooksAndRequests>
                    <Badge color={"blue"}></Badge>
                    <Badge color={"red"}></Badge>
                </BooksAndRequests>
            </UserWrap>
        </UserContainer>
    )
};

export default User;
