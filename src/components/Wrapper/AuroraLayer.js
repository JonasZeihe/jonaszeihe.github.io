import React, { useId } from 'react'
import styled, { keyframes, css } from 'styled-components'

const auroraMotion = keyframes`
  0%   { background-position: 18% 72%; opacity: 0.65; }
  33%  { background-position: 84% 28%; opacity: 0.77; }
  66%  { background-position: 52% 97%; opacity: 0.71; }
  100% { background-position: 18% 72%; opacity: 0.65; }
`

const variantMap = {
  subtle: {
    opacity: 0.048,
    blur: '14px',
    size: '180% 160%',
    scale: 6,
    freq: '0.007 0.017',
    anim: '18s',
  },
  intense: {
    opacity: 0.09,
    blur: '24px',
    size: '240% 200%',
    scale: 11,
    freq: '0.013 0.026',
    anim: '14s',
  },
}

const getHighlight = (theme) =>
  theme.mode === 'dark' ? 'rgba(110,180,255,0.15)' : 'rgba(140,210,255,0.11)'

const getWaterTint = (theme) =>
  theme.mode === 'dark' ? '#63cffc18' : '#8eefff1a'

export default function AuroraLayer({
  variant = 'intense',
  animated = true,
  ...props
}) {
  const filterId = useId()
  const { opacity, blur, size, scale, freq, anim } =
    variantMap[variant] || variantMap.intense

  return (
    <>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id={filterId} x="0" y="0" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency={freq}
            numOctaves="2"
            seed="27"
            result="turb"
          >
            {animated && (
              <animate
                attributeName="baseFrequency"
                values={`${freq};0.09 0.11;${freq}`}
                dur={anim}
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
            stdDeviation={blur === '14px' ? 2.0 : 3.2}
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
        $anim={anim}
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
      ellipse 95% 45% at 55% 100%,
      ${({ theme }) => getWaterTint(theme)} 0%,
      transparent 78%
    ),
    radial-gradient(
      ellipse 55% 22% at 40% 15%,
      ${({ theme }) => getHighlight(theme)} 0%,
      transparent 99%
    ),
    radial-gradient(
      ellipse 68% 13% at 65% 85%,
      ${({ theme }) => getWaterTint(theme)} 0%,
      transparent 93%
    );
  background-size: ${({ $size }) => $size};
  background-repeat: no-repeat;
  filter: ${({ $filter, $blur }) => `${$filter} blur(${$blur})`};
  opacity: ${({ $opacity }) => $opacity};
  mix-blend-mode: lighten;
  transition:
    opacity 0.19s cubic-bezier(0.43, 0.09, 0.46, 0.99),
    filter 0.23s cubic-bezier(0.32, 0.12, 0.43, 0.98),
    background-size 0.17s cubic-bezier(0.44, 0.19, 0.42, 0.98);

  ${({ $animated, $anim }) =>
    $animated &&
    css`
      animation: ${auroraMotion} ${$anim} cubic-bezier(0.66, 0.21, 0.41, 0.88)
        infinite alternate;
    `}
`
