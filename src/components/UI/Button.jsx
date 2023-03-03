import styled from 'styled-components'
import colors from '../../constants/colors'

const LoginButton = ({text, style, ...props}) =>{
    return (
        <Button style={style} {...props}>
          {text}
        </Button>
      )
}

const Button = styled.button`
    display:flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    background-color: ${colors.orange};
    border-radius: 30px ;
`

export default LoginButton;