import React from 'react'
import styled from 'styled-components'
import colors from '../constants/colors'

const UserProfile = () =>{
    return (  <profileContainer>
        <menuContainer>
            <a>Menu</a>
        </menuContainer>
        <infoContainer>
            <a>Hello world its my page</a>
        </infoContainer>
    </profileContainer>
)}
  

const profileContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${colors.theme};
  height: 731px;
  width: 1536px;  
`
const menuContainer = styled.div`
display: flex;
align-items: center;
justify-content: left;
height: 731px;
width: 500px;
background-color: ${colors.borderIcon} ;
border-color: aqua;
`
const infoContainer = styled.div`
display: flex;
align-items: center;
height: 731px;
width: 1036px;    
background-color: ${colors.blue} ;
`
export default UserProfile
