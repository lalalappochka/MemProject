import React from 'react'
import LoginButton from '../components/UI/Button'
import Input from '../components/UI/Input'
import logo from '../assets/logo.png'
import figure from '../assets/figure.jpg'
import IconButton from '../components/UI/IconButton'
import { Link } from 'react-router-dom'
import {
  Container,
  Logo,
  Title,
  Divider,
  FormContainer,
  InputWrapper,
  AlternativeLogin,
  Dash,
  IconLogin,
  Figure
} from './Login'

const Registration = () => {
  return (
    <Container>
      <FormContainer>
        <Logo>
          <img src={logo} alt='' />
        </Logo>
        <Title>
        <h2>Registration</h2>
        </Title>
        <InputWrapper>
          <Input placeholder='email'></Input>
          <Input placeholder='nickname'></Input>
          <Input placeholder='password'></Input>
          <LoginButton text='Log In'></LoginButton>
        </InputWrapper>
        <AlternativeLogin>
          <Divider>
            <Dash />
            <span>or</span>
            <Dash />
          </Divider>
          <IconLogin>
            <IconButton icon={'twitter'} size={30}></IconButton>
            <IconButton icon={'google'} size={30}></IconButton>
          </IconLogin>
          <Link to='/login'>Have an account?</Link>
        </AlternativeLogin>
      </FormContainer>
      <Figure>
            <img src={figure} alt=''/>
        </Figure>
    </Container>
  )
}

export default Registration
