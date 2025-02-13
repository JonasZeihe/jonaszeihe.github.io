import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledList = styled.ul`
  margin: ${({ theme }) => theme.spacing(3)} 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  list-style: none;
`

const StyledListItem = styled.li`
  padding: ${({ theme }) => theme.spacing(2)};
  background: ${({ theme }) => theme.colors.depth.dark};
  color: ${({ theme }) => theme.colors.neutral.ultraLight};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.boxShadow.light};
  transition:
    transform 0.3s ease,
    background 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    background: ${({ theme }) => theme.colors.depth.main};
    cursor: default;
  }
`

function ListComponent({ items }) {
  return (
    <StyledList>
      {items.map((item, index) => (
        <StyledListItem key={item.id || `item-${index}`}>
          {item.content}
        </StyledListItem>
      ))}
    </StyledList>
  )
}

ListComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
}

export default ListComponent
