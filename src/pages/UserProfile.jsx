import React from 'react'
import styled from 'styled-components'
import colors from '../constants/colors'
import Sidebar from '../components/UI/sidebar/Sidebar'
import profile from '../assets/profile.jpg'
import UserInfo from '../components/UI/UserInfo'
import {Title} from './Login'
import LoginButton from '../components/UI/Button'

const UserProfile = () =>{
    return (  
    <ProfileContainer>
        <Sidebar>
        </Sidebar>
        <InfoContainer>
            <Profile/>
            <Title>
             <h2>Bio Graph</h2>
            </Title>
            <InfoPanel>
            <InfoElement>
            <UserInfo text={'First name:'}></UserInfo>
            <UserInfo text={'ALexandra'}></UserInfo>
            </InfoElement>
            <InfoElement>
            <UserInfo text={'Last name:'}></UserInfo>
            <UserInfo text={'Lapo'}></UserInfo>
            </InfoElement>
            <InfoElement>
            <UserInfo text={'Nickname:'}></UserInfo>
            <UserInfo text={'Lalalappochka'}></UserInfo>
            </InfoElement>
            <InfoElement>
            <UserInfo text={'Mobile:'}></UserInfo>
            <UserInfo text={'80447831120'}></UserInfo>
            </InfoElement>
            <InfoElement>
            <UserInfo text={'Birthday:'}></UserInfo>
            <UserInfo text={'25 June'}></UserInfo>
            </InfoElement>
            <InfoElement>
            <UserInfo text={'Email:'}></UserInfo>
            <UserInfo text={'sanyalappo16@gmail.com'}></UserInfo>
            </InfoElement>
            </InfoPanel>
            <LoginButton text='Change Info'></LoginButton>
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
  background-color: ${colors.background};
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
const InfoPanel = styled.div`
  display:flex;
  justify-content: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  height: 120px;
  width: 1000px;
  border-radius:  2px;
  border-color: antiquewhite;
`
const InfoElement = styled.div`
  display:flex;
  justify-content: space-between;
  flex-direction: row;
  width: 270px;
`


export default UserProfile
