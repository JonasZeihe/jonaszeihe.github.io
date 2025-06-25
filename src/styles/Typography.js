// src/styles/Typography.js
import React from 'react'
import styled, { css } from 'styled-components'

const tagMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  subhead: 'h4',
  body: 'p',
  caption: 'span',
}

const StyledTypography = styled.span`
  margin: 0;
  padding: 0;
  text-align: ${({ align }) => align};

  ${({ variant, theme }) => {
    const f = theme.typography.fontSize
    const w = theme.typography.fontWeight
    const l = theme.typography.lineHeight
    const s = theme.spacing
    const b = theme.breakpoints
    const ls = theme.typography.letterSpacing

    const getTextColor = (defaultColor) =>
      theme.mode === 'dark'
        ? theme.colors.neutral.black
        : defaultColor || theme.colors.neutral.dark

    const variants = {
      h1: css`
        font-size: ${f.h1};
        font-weight: ${w.bold};
        line-height: ${l.tight};
        letter-spacing: ${ls.tight};
        margin-bottom: ${s(5)};
        color: ${getTextColor(theme.colors.primary.main)};
        @media (max-width: ${b.md}) {
          font-size: ${f.h2};
          margin-bottom: ${s(3)};
        }
      `,
      h2: css`
        font-size: ${f.h2};
        font-weight: ${w.medium};
        line-height: ${l.tight};
        letter-spacing: ${ls.tight};
        margin-bottom: ${s(4)};
        color: ${getTextColor(theme.colors.primary[4])};
        @media (max-width: ${b.md}) {
          font-size: ${f.h3};
          margin-bottom: ${s(2)};
        }
      `,
      h3: css`
        font-size: ${f.h3};
        font-weight: ${w.medium};
        line-height: ${l.normal};
        letter-spacing: ${ls.normal};
        margin-bottom: ${s(3)};
        color: ${getTextColor(theme.colors.primary.main)};
        @media (max-width: ${b.md}) {
          font-size: ${f.body};
        }
      `,
      subhead: css`
        font-size: ${f.body};
        font-weight: ${w.medium};
        line-height: ${l.normal};
        color: ${getTextColor(theme.colors.accent.main)};
        margin-bottom: ${s(2)};
      `,
      body: css`
        font-size: ${f.body};
        font-weight: ${w.regular};
        line-height: ${l.normal};
        color: ${getTextColor(theme.colors.neutral.dark)};
        margin-bottom: ${s(2)};
        @media (max-width: ${b.md}) {
          font-size: ${f.small};
        }
      `,
      caption: css`
        font-size: ${f.small};
        font-weight: ${w.light};
        line-height: ${l.tight};
        color: ${theme.colors.neutral.grey};
        margin-bottom: ${s(1)};
      `,
    }
    return variants[variant] || variants.body
  }}

  color: ${({ theme, color }) => {
    if (!color) return undefined
    const [group, tone = 'main'] = color.split('.')
    return theme.colors[group]?.[tone] || color
  }};
`

function Typography({ variant = 'body', color, align = 'left', children }) {
  const asTag = tagMap[variant] || 'p'
  return (
    <StyledTypography as={asTag} variant={variant} color={color} align={align}>
      {children}
    </StyledTypography>
  )
}

export default Typography
