import React from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'
import Icon from './Icon'

const IconButton = ({ icon, size }) => {
  return (
    <Button>
      <Icon icon={icon} size={size} />
    </Button>
  )
}

const Button = styled.button`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  border: 0;
  border-color: ${colors.borderIcon};
  border-radius: 100%;
  height: 30px;
  width: 30px;
`

export default IconButton
