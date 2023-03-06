import styled from 'styled-components'
import colors from '../constants/colors'
import LoginButton from '../components/UI/Button'
import InfoInput from '../components/Input'
import logo from '../pics/logo.png'
import figure from '../pics/figure.jpg'
import IconButton from '../components/UI/IconButton'

const Registration = (props) =>{
return (
    
    <Container>
        <Inside>
        <FormContainer>
        <img src={logo} alt="" height='120px' width='120px' />
            <h2>Log In</h2>
            <InputWrapper>
            <InfoInput placeholder='email id'></InfoInput>
            <InfoInput placeholder='nickname'></InfoInput>
            <InfoInput placeholder='password'></InfoInput>
            <LoginButton text='Log In'></LoginButton>
            </InputWrapper>
            <AlternativeLogin>
            <Divide>
            <Dash/>
                <span>or</span>
            <Dash/>
            </Divide>
            <IconLogin>
            <IconButton icon='twitter'></IconButton>
            <IconButton icon='twitter'></IconButton>
            </IconLogin>
            
            </AlternativeLogin>
            
        </FormContainer>
        <img src={figure} alt="" height='480px' width='400px' />
        </Inside>
    
    </Container>
)
}


const Container = styled.div`
//position: relative;
display: flex;
justify-content: center;
align-items: center;
background-color: ${colors.theme};
height: 100vh;
width: 100%;
`
const FormContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 text-align: left;
 //gap: 1rem;
 background-color: ${colors.white};
 font-family: 'Poppins Regular';
 width: 100%;
 h2 {
    align-self: flex-start;
    margin-left: 19%;
    font-family:'Poppins Medium';
 }
`
const Inside = styled.div`
display:flex;
flex-direction: row ;
min-width: 50rem;
min-height: 30rem;
`
const InputWrapper = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 text-align: left;
 gap: 1rem; 
`
const AlternativeLogin = styled.div`
display: flex;
    align-items: center;
    flex-direction: column;
   // height: 20px;
    width: 100%;

`
const Divide = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    height: 20px;
    width: 60%;
    span{
        font-size: 15px;
        font-family: 'Poppins Regular';
        color: ${colors.grey};
    }
`
const Dash = styled.div`
    border-bottom: dashed 2px ${colors.grey};
    width: 100%;
    margin-left: 10px;
    margin-right: 10px;
`
const IconLogin = styled.div`
display: flex;
    align-items: center;
    flex-direction: row;
    height: 40px;
    width: 60%;
`

export default Registration
 
