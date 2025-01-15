import React from 'react';
import styled from 'styled-components';

function resolveThemeColor(theme, colorKey) {
  if (!colorKey) return theme.colors.neutral.lightest;
  const [palette, shade = 'main'] = colorKey.split('.');
  return theme.colors[palette]?.[shade] || theme.colors.neutral.light;
}

const HexagonWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1.155;
  .hexagon-svg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
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
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${({ theme, contentPadding }) =>
      contentPadding ? theme.spacing(contentPadding) : theme.spacing(2)};
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
  gradient,
  contentPadding,
  onClick,
  className,
}) {
  return (
    <HexagonWrapper
      className={className}
      backgroundColor={color}
      gradient={gradient}
      contentPadding={contentPadding}
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
