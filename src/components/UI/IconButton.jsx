import styled from "styled-components";
import colors from "../../constants/colors";
import Icon from "./Icon";

const IconButton = (style, icon,size, ...props) =>{
    return (<Button style={style}>
        {!!icon && <Icon icon='icon' size={30}/> }
    </Button>)
}

const Button = styled.button`
    display:flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    border: 0;
    border-color:${colors.borderIcon};
    border-radius: 70%;
    height: auto;
    width: 15%;
`

export default IconButton