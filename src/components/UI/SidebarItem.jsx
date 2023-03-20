import React from "react";
import Icon from "./Icon";

const sidebarItem = (text, icon, size) =>{
    return(
        <BarItem>
        <Icon icon={icon} size={size} />
        {text}
        </BarItem>
    )
}

const BarItem = styled.div`
 display:flex;
 align-items: center;
 height: 40px;
 width: 200px;
`
export default BarItem