import React from "react";
import styled from "styled-components";
import Icon from "./Icon";
import colors from "../../constants/colors";
import { Link } from "react-router-dom";

const SidebarItem = ({text, icon, size, route}) =>{
    return( 
        <NavbarLink to={route}>
        <BarItem>
        <ActivityIndicator></ActivityIndicator>
        <Icon icon={icon} size={size} />
        {text}
        </BarItem>
        </NavbarLink>
    )
}

const BarItem = styled.nav`
 display:flex;
 align-items: center;
 height: 40px;
 width: 200px;
 gap: 5px;
`
const NavbarLink = styled(Link)`
    
`
const ActivityIndicator = styled.div`
display: flex;
justify-content: flex-start;
width: 5px;
height: 40px;
background-color: ${colors.orange};
`
export default SidebarItem