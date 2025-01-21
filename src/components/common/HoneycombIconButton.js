import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import * as Icons from 'react-icons/fa'

const IconButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor || theme.colors.primary.main};
  color: ${({ theme, color }) => color || theme.colors.neutral.lightest};
  border: none;
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  width: 60px;
  height: 50px;

  &:hover {
    transform: scale(1.1);
    box-shadow: ${({ theme }) => theme.boxShadow.heavy};
  }
`

export default function HoneycombIconButton({ icon, onClick }) {
  const Icon = Icons[icon]
  return (
    <IconButtonWrapper onClick={onClick}>
      <Icon size={20} />
    </IconButtonWrapper>
  )
}

HoneycombIconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}
