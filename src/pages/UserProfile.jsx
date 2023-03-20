import React from 'react'
import styled from 'styled-components'
import colors from '../constants/colors'
import Sidebar from '../components/UI/Sidebar'
import UserPanel from '../components/UI/UserPanel'

const UserProfile = () =>{
    return (  
    <ProfileContainer>
        <UserPanel />
        <Sidebar></Sidebar>
        <InfoContainer>
            <a>Hello world its my page</a>
        </InfoContainer>
    </ProfileContainer>
)}
  

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${colors.theme};
  height: 731px;
  width: 1536px;  
`
const InfoContainer = styled.div`
    display: flex;
align-items: center;
height: 731px;
width: 1036px;    
background-color: ${colors.blue} ;
`
export default UserProfile
