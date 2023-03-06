import styled from "styled-components"
import colors from "../constants/colors"

const Input = (props) =>{
    return <InfoInput></InfoInput>

}

const InfoInput = styled.input`
  display  : flex ;
  justify-content: center;
  flex-direction: column;
  border-radius: 20px;
  height: 30px;
  width: 240px;
  background-color: ${colors.white};
  border-color: ${colors.grey};

  font-family: 'Poppins Regular';
`
export default InfoInput