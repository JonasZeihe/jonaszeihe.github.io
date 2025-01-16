import React from 'react';
import styled from 'styled-components';

function resolveThemeColor(theme, key) {
  if (!key) return theme.colors.neutral.lightest;
  const [palette, shade = 'main'] = key.split('.');
  return theme.colors[palette]?.[shade] || theme.colors.neutral.lightest;
}

const HexagonWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1.155;

  .hexagon-svg {
    position: absolute;
    width: 100%;
    height: 100%;
    polygon {
      fill: ${({ theme, gradient, backgroundColor }) =>
        gradient
          ? theme.gradients[gradient]
          : resolveThemeColor(theme, backgroundColor)};
    }
    pointer-events: none;
  }

  .hex-content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: ${({ theme, contentPadding }) =>
      contentPadding ? theme.spacing(contentPadding) : theme.spacing(4)};
    z-index: 1;
  }
`;

export default function HexagonCell({
  children,
  color,
  gradient,
  contentPadding,
  strokeColor,
  onClick,
  className,
}) {
  return (
    <HexagonWrapper
      className={className}
      backgroundColor={color}
      gradient={gradient}
      contentPadding={contentPadding}
      strokeColor={strokeColor}
      onClick={onClick}
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
