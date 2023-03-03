import styled from 'styled-components'
import colors from '../constants/colors'
import LoginButton from '../components/UI/Button'
//import LoginButton from '../components/UI/Button'
const Login = (props) =>{
return (
    
    <Container>
        <Inside>
        <Form>
            <title>Sign In Form</title>
            <LoginButton></LoginButton>
            
        </Form>
        <img src={require("../pics/figure.jpg")} alt="" height='480px' width='400px' />
       
        </Inside>
    
    </Container>
)
}

const Container = styled.div`
//position: relative;
display: flex;
justify-content: center;
 align-items: center;
background-color: ${colors.green};
height: 100vh;
width: 100%;
`
const Form = styled.div`
 display: flex;
 flex-direction: column;
 background-color: ${colors.white};
 width: 100%;
`
const Inside = styled.div`
display:flex;
flex-direction: row ;
min-width: 50rem;
min-height: 30rem;
`
export default Login
 
