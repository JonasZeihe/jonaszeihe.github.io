import React, { useId } from 'react'
import styled, { keyframes, css } from 'styled-components'

const auroraMotion = keyframes`
  0%   { background-position: 16% 80%; opacity: 0.82; }
  39%  { background-position: 78% 14%; opacity: 0.95; }
  62%  { background-position: 56% 98%; opacity: 0.88; }
  100% { background-position: 16% 80%; opacity: 0.82; }
`

const variantMap = {
  subtle: {
    opacity: 0.09,
    blur: '8px',
    size: '120% 120%',
    scale: 7,
    freq: '0.012 0.044',
  },
  intense: {
    opacity: 0.19,
    blur: '15px',
    size: '210% 210%',
    scale: 13,
    freq: '0.029 0.072',
  },
}

const getHighlight = (theme) =>
  theme.mode === 'dark'
    ? theme.colors.primary.main
    : theme.colors.primary[2] || theme.colors.primary.main

const getAuroraTint = (theme) =>
  theme.mode === 'dark'
    ? `${theme.colors.accent.main}55`
    : `${theme.colors.accent.main}22`

const getWaterTint = (theme) =>
  theme.mode === 'dark' ? '#52cfff12' : '#a0eaff13'

export default function AuroraLayer({
  variant = 'intense',
  animated = true,
  interactive = true,
  ...props
}) {
  const filterId = useId()
  const { opacity, blur, size, scale, freq } =
    variantMap[variant] || variantMap.intense

  return (
    <>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id={filterId} x="0" y="0" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency={freq}
            numOctaves="2"
            seed="18"
            result="turb"
          >
            {animated && (
              <animate
                attributeName="baseFrequency"
                values={`${freq};0.09 0.11;${freq}`}
                dur="14s"
                repeatCount="indefinite"
              />
            )}
          </feTurbulence>
          <feDisplacementMap
            in2="turb"
            in="SourceGraphic"
            scale={scale}
            xChannelSelector="R"
            yChannelSelector="G"
            result="disp"
          />
          <feGaussianBlur
            stdDeviation={blur === '8px' ? 1.3 : 2.2}
            result="blur"
          />
        </filter>
      </svg>
      <AuroraFX
        $filter={`url(#${filterId})`}
        $opacity={opacity}
        $blur={blur}
        $size={size}
        $animated={animated}
        $interactive={interactive}
        {...props}
      />
    </>
  )
}

const AuroraFX = styled.div`
  pointer-events: none;
  position: absolute;
  inset: 0;
  z-index: 3;
  border-radius: inherit;
  background: radial-gradient(
      ellipse 57% 33% at 36% 19%,
      ${({ theme }) => getAuroraTint(theme)} 0%,
      transparent 90%
    ),
    radial-gradient(
      ellipse 49% 25% at 68% 26%,
      ${({ theme }) => getHighlight(theme)} 0%,
      transparent 96%
    ),
    radial-gradient(
      ellipse 90% 12% at 30% 90%,
      ${({ theme }) => getWaterTint(theme)} 0%,
      transparent 94%
    ),
    linear-gradient(
      115deg,
      rgba(255, 255, 255, 0.06) 11%,
      ${({ theme }) => getAuroraTint(theme)} 47%,
      transparent 95%
    );
  background-size: ${({ $size }) => $size};
  background-repeat: no-repeat;
  filter: ${({ $filter, $blur }) => `${$filter} blur(${$blur})`};
  opacity: ${({ $opacity }) => $opacity};
  mix-blend-mode: lighten;
  transition:
    opacity 0.17s,
    filter 0.21s,
    background-size 0.16s;
  ${({ $animated }) =>
    $animated &&
    css`
      animation: ${auroraMotion} 15s cubic-bezier(0.68, 0.21, 0.41, 0.92)
        infinite alternate;
    `}
  ${({ $interactive }) =>
    $interactive &&
    css`
      html:not([data-mouse-down]) &:hover,
      html:not([data-mouse-down]) &:focus-within {
        opacity: 0.92;
        filter: ${({ $filter, $blur }) =>
          `${$filter} blur(calc(${$blur} * 1.09)) brightness(1.07)`};
        background-size: 250% 250%;
      }
    `}
`
