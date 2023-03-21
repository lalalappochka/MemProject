import React from "react";
import styled from "styled-components";
import Icon from "../Icon";
import colors from "../../../constants/colors";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const SidebarItem = ({text, icon, size, route}) =>{
    const location = useLocation();
    return( 
        <LinkItem to={route}>
        <BarItem>
        {location.pathname === route && <ActivityIndicator></ActivityIndicator>}
        <Icon icon={icon} size={size} />
        {text}
        </BarItem>
        </LinkItem>
    )
}

const BarItem = styled.div`
 display:flex;
 align-items: center;
 height: 40px;
 width: 200px;
 gap: 5px;
`
const LinkItem = styled(Link)`
text-decoration: none;
color: ${colors.blue}
`
const ActivityIndicator = styled.div`
display: flex;
justify-content: flex-start;
width: 5px;
height: 40px;
background-color: ${colors.orange};
`
export default SidebarItem