import React from 'react'
import styled, { css } from 'styled-components'

const tagMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  subhead: 'h4',
  body: 'p',
  caption: 'small',
}

const StyledTypography = styled.span`
  margin: 0;
  padding: 0;
  color: ${({ theme, color, variant }) => {
    const [key, shade = 'main'] = (color || `${variant}.main`).split('.')
    return theme.colors[key]?.[shade] || theme.colors.primary.main
  }};
  text-align: ${({ align }) => align || 'left'};
  line-height: ${({ theme, lineHeight }) =>
    lineHeight || theme.typography.lineHeight.normal};

  ${({ variant, theme }) => {
    const s = theme.spacing
    const f = theme.typography.fontSize
    const w = theme.typography.fontWeight
    const l = theme.typography.lineHeight
    const b = theme.breakpoints

    const variants = {
      h1: css`
        font-size: ${f.h1};
        font-weight: ${w.bold};
        line-height: ${l.tight};
        margin-bottom: ${s(6)};
        @media (max-width: ${b.md}) {
          font-size: ${f.h2};
          margin-bottom: ${s(4)};
        }
      `,
      h2: css`
        font-size: ${f.h2};
        font-weight: ${w.medium};
        line-height: ${l.tight};
        margin-bottom: ${s(5)};
        @media (max-width: ${b.md}) {
          font-size: ${f.h3};
          margin-bottom: ${s(3)};
        }
      `,
      h3: css`
        font-size: ${f.h3};
        font-weight: ${w.medium};
        line-height: ${l.normal};
        margin-bottom: ${s(4)};
        @media (max-width: ${b.md}) {
          font-size: ${f.body};
          margin-bottom: ${s(2)};
        }
      `,
      subhead: css`
        font-size: ${f.h4};
        font-weight: ${w.medium};
        line-height: ${l.normal};
        margin-bottom: ${s(3)};
        @media (max-width: ${b.md}) {
          font-size: ${f.small};
        }
      `,
      body: css`
        font-size: ${f.body};
        font-weight: ${w.regular};
        line-height: ${l.normal};
        margin-bottom: ${s(3)};
        @media (max-width: ${b.md}) {
          font-size: ${f.small};
          margin-bottom: ${s(2)};
        }
      `,
      caption: css`
        font-size: ${f.small};
        font-weight: ${w.light};
        line-height: ${l.tight};
        margin-bottom: ${s(2)};
      `,
    }

    return variants[variant] || variants.body
  }}
`

function Typography({
  variant = 'body',
  color,
  align = 'left',
  lineHeight,
  children,
}) {
  const asTag = tagMap[variant] || 'p'
  return (
    <StyledTypography
      as={asTag}
      variant={variant}
      color={color}
      align={align}
      lineHeight={lineHeight}
    >
      {children}
    </StyledTypography>
  )
}

export default Typography
