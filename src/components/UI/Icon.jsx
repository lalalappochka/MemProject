import React from 'react'
import IcomoonReact from 'icomoon-react'
import colors from '../../constants/colors';

const iconSet = require('./selection.json')
const Icon = ({icon, color, size}) => (
 <IcomoonReact 
    iconSet={iconSet} 
    icon={icon}
    color={color|| colors.orange}
    size={size||24}
        />) 



export default Icon