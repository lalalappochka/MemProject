import React from "react";
import styled from "styled-components";
import colors from "../constants/colors";

const UserPanel = ({text, profileUrl}) =>{
    return(
        <UserInfoPanel>
            <Image src={profileUrl}></Image>
            {text}
        </UserInfoPanel>

    )
}

const UserInfoPanel = styled.div`
  display  : flex ;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 200px;
  gap: 5px;
  background-color: ${colors.lightOrange};
  font-size: 15px;
`
const Image = styled.img`
 border-radius: 100px;
 height: 90px;
 width: 90px;
`
export default UserPanel