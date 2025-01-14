import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const resolveThemeColor = (theme, colorKey) => {
  if (!colorKey) return theme.colors.neutral.lightest;
  const [palette, shade] = colorKey.split('.');
  return theme.colors[palette]?.[shade] || theme.colors.neutral.light;
};

const HexagonWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  /* Hexagon-Verhältnis durch Padding-Trick */
  aspect-ratio: 1.155; /* Hexagon Seitenverhältnis: Breite zu Höhe */

  .hexagon-svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    polygon {
      fill: ${({ theme, gradient, backgroundColor }) =>
        gradient
          ? theme.gradients[gradient]
          : resolveThemeColor(theme, backgroundColor)};
    }
  }

  .hex-content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${({ theme, contentPadding }) =>
      contentPadding ? theme.spacing(contentPadding) : theme.spacing(2)};
    z-index: 1;

    /* Sicherstellen, dass Inhalt nicht überläuft */
    word-break: break-word;

    img,
    svg {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }
`;

export default function HexagonCell({
  children,
  color,
  className,
  gradient,
  contentPadding,
}) {
  return (
    <HexagonWrapper
      className={className}
      backgroundColor={color}
      gradient={gradient}
      contentPadding={contentPadding}
    >
      <svg
        className="hexagon-svg"
        viewBox="0 0 100 86.6"
        preserveAspectRatio="none"
      >
        <polygon points="25,0 75,0 100,43.3 75,86.6 25,86.6 0,43.3" />
      </svg>
      <div className="hex-content">{children}</div>
    </HexagonWrapper>
  );
}

HexagonCell.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  className: PropTypes.string,
  gradient: PropTypes.string,
  contentPadding: PropTypes.number,
};

HexagonCell.defaultProps = {
  children: null,
  className: '',
  color: 'neutral.lightest',
  gradient: null,
  contentPadding: 2,
};
