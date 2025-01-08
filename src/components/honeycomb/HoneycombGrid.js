import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import HoneycombCell from './HoneycombCell';

const HoneycombGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: ${({ theme }) => theme.spacing(3)};
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(3)};
`;

export default function HoneycombGrid({ items }) {
  return (
    <HoneycombGridWrapper>
      {items.map((item) => (
        <HoneycombCell key={item.id} project={item} />
      ))}
    </HoneycombGridWrapper>
  );
}

HoneycombGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string,
      badges: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          icon: PropTypes.string,
          variant: PropTypes.string,
        })
      ),
      buttons: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          onClick: PropTypes.func,
          variant: PropTypes.string,
        })
      ),
    })
  ).isRequired,
};
