import styled from "styled-components";
import IcomoonReact from 'icomoon-react'

const iconSet = require('./selection.json')
const Icon = (icon, color, size) =>
<IcomoonReact 
    iconSet={iconSet} 
    icon={icon}
    color={color}
    size={size||24}
        />;

export default Icon