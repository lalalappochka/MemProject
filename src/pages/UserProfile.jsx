import React from 'react'
import styled from 'styled-components'
import colors from '../constants/colors'
import Sidebar from '../components/UI/Sidebar'
import profile from '../assets/profile.jpg'
import UserInfo from '../components/UI/UserInfo'

const UserProfile = () =>{
    return (  
    <ProfileContainer>
        <Sidebar>
        </Sidebar>
        <InfoContainer>
            <Profile/>
            <UserInfo text={'Lapo ALexandra'}></UserInfo>
            <UserInfo text={'Lalalappochka'}></UserInfo>
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
  flex-direction: column;
  height: 731px;
  width: 1236px;    
  background-color: ${colors.blue};
  font-family: "Poppins Regular";
`
const Profile = styled.div`
  display: flex;
  align-items: flex-start;
  height: 200px;
  width: 200px;
  background-image: url(${profile});
  background-position: center;
  background-size: 200px 200px;
  border-radius:  100px;
  margin-top: 20px;
  margin-left: 50px;
`
export default UserProfile
