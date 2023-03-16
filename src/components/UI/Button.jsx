import styled from 'styled-components'
import colors from '../../constants/colors'

const LoginButton = ({ text, style, ...props }) => {
  return (
    <Button style={style} {...props}>
      {text}
    </Button>
  )
}

const Button = styled.button`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 30px;
  height: 30px;
  width: 250px;
  font-family: 'Poppins Regular';
  background-color: ${colors.orange};
`

export default LoginButton
