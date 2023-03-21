import React from "react";
import styled from "styled-components";

const UserInfo = ({text}) =>{
    return(
        <Info>
          {text}
        </Info>
    )
}

const Info = styled.div`
display: flex;
align-items: center;
flex-direction: row;
font-size: 20px;
width: 200px;
border-bottom: 10px;
`
export default UserInfo
