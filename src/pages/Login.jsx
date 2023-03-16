import React from 'react'
import styled from 'styled-components'
import colors from '../constants/colors'
import LoginButton from '../components/UI/Button'
import Input from '../components/UI/Input'
import logo from '../assets/logo.png'
import figure from '../assets/figure.jpg'
import IconButton from '../components/UI/IconButton'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Container>
      <FormContainer>
        <Logo>
          <img src={logo} alt='' />
        </Logo>
        <Title>
        <h2>Log In</h2>
        </Title>
        <InputWrapper>
          <Input placeholder='email'></Input>
          <Input placeholder='password'></Input>
          <CheckWrapper>
            <CheckBox>
              <input id='remember' type='checkbox' />
              <label for='remember'>Remember me</label>
            </CheckBox>
            <span>Forgot password</span>
          </CheckWrapper>
          <LoginButton text='Log In'></LoginButton>
        </InputWrapper>
        <AlternativeLogin>
          <Divider>
            <Dash />
            <span>or</span>
            <Dash />
          </Divider>
          <IconLogin>
            <IconButton icon={'twitter'}></IconButton>
            <IconButton icon={'google'}></IconButton>
          </IconLogin>
          <Link to='/registration'>Don't have an account?</Link>
        </AlternativeLogin>
      </FormContainer>
      <Figure>
            <img src={figure} alt=''/>
      </Figure>
    </Container>
  )
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.theme};
  height: 731px;
  width: 1536px;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  background-color: ${colors.white};
  font-family: 'Poppins Regular';
  width: 380px;
  height: 480px;
`
export const Logo = styled.div`
  height: 115px;
  width: 110px;
`
export const Title = styled.div`
    display:flex;
    align-self: flex-start;
    margin-left: 19%;
    font-family: 'Poppins Medium';
`
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  gap: 13px;
  font-size: 8px;
`
const CheckWrapper = styled.div`
  display: flex;
  column-gap: 45px;
  align-items: center;
  justify-content: space-between;
  font-family: 'Poppins Regular';
  color: ${colors.grey};
  font-size: 11px;
`
const CheckBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 11px;
  border-width: 1px;
  font-family: 'Poppins Regular';
  color: ${colors.grey};
`
export const AlternativeLogin = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  font-family: 'Poppins Regular';
  font-size: 80%;
  margin-top: 3%;
`
export const Divider = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 20px;
  width: 60%;
  font-size: 12px;
  font-family: 'Poppins Regular';
  color: ${colors.grey};
`
export const Dash = styled.div`
  border-bottom: dashed 2px ${colors.grey};
  width: 100%;
  margin-left: 10px;
  margin-right: 10px;
`
export const IconLogin = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
`
export const Figure = styled.div`
  height: 480px;
  width: 400px;
`

export default Login
