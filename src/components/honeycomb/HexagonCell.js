import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HexagonWrapper = styled.div`
  position: relative;
  width: 200px; /* Breite des Hexagons */
  height: calc(200px * 0.866); /* Höhe = Breite * sqrt(3)/2 */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;

  .hexagon-svg {
    width: 100%;
    height: 100%;
  }

  .hex-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    text-align: center;
    color: ${({ textColor, theme }) => textColor || theme.colors.neutral.dark};
  }

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
`;

export default function Hexagon({ bgColor, children }) {
  return (
    <HexagonWrapper>
      <svg className="hexagon-svg" viewBox="0 0 100 86.6">
        <polygon
          points="25,0 75,0 100,43.3 75,86.6 25,86.6 0,43.3"
          fill={bgColor || '#F0F0F0'}
          stroke="rgba(0, 0, 0, 0.1)"
          strokeWidth="1"
        />
      </svg>
      <div className="hex-content">{children}</div>
    </HexagonWrapper>
  );
}

Hexagon.propTypes = {
  bgColor: PropTypes.string,
  children: PropTypes.node,
};

Hexagon.defaultProps = {
  bgColor: null,
  children: null,
};
