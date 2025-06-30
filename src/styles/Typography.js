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
    const { fontSize, fontWeight, lineHeight, letterSpacing } = theme.typography
    const s = theme.spacing
    const b = theme.breakpoints
    const accentColor = theme.colors.accent.main
    const textMain = theme.colors.text.main
    const textSubtle = theme.colors.text.subtle

    const variants = {
      h1: css`
        font-size: ${fontSize.h1};
        font-weight: ${fontWeight.bold};
        line-height: ${lineHeight.tight};
        letter-spacing: ${letterSpacing.tight};
        margin-bottom: ${s(5)};
        color: ${textMain};
        @media (max-width: ${b.md}) {
          font-size: ${fontSize.h2};
          margin-bottom: ${s(3)};
        }
      `,
      h2: css`
        font-size: ${fontSize.h2};
        font-weight: ${fontWeight.medium};
        line-height: ${lineHeight.tight};
        letter-spacing: ${letterSpacing.tight};
        margin-bottom: ${s(4)};
        color: ${textMain};
        @media (max-width: ${b.md}) {
          font-size: ${fontSize.h3};
          margin-bottom: ${s(2)};
        }
      `,
      h3: css`
        font-size: ${fontSize.h3};
        font-weight: ${fontWeight.medium};
        line-height: ${lineHeight.normal};
        letter-spacing: ${letterSpacing.normal};
        margin-bottom: ${s(3)};
        color: ${textMain};
        @media (max-width: ${b.md}) {
          font-size: ${fontSize.body};
        }
      `,
      subhead: css`
        font-size: ${fontSize.body};
        font-weight: ${fontWeight.medium};
        line-height: ${lineHeight.normal};
        color: ${accentColor};
        margin-bottom: ${s(2)};
      `,
      body: css`
        font-size: ${fontSize.body};
        font-weight: ${fontWeight.regular};
        line-height: ${lineHeight.normal};
        color: ${textMain};
        margin-bottom: ${s(2)};
        @media (max-width: ${b.md}) {
          font-size: ${fontSize.small};
        }
      `,
      caption: css`
        font-size: ${fontSize.small};
        font-weight: ${fontWeight.light};
        line-height: ${lineHeight.tight};
        color: ${textSubtle};
        margin-bottom: ${s(1)};
      `,
    }
    return variants[variant] || variants.body
  }}

  ${({ color, theme }) =>
    color &&
    css`
      color: ${(() => {
        const [group, tone = 'main'] = color.split('.')
        return theme.colors[group]?.[tone] || theme.colors.text?.[tone] || color
      })()};
    `}
`

function Typography({
  variant = 'body',
  color,
  align = 'left',
  children,
  ...rest
}) {
  const asTag = tagMap[variant] || 'p'
  return (
    <StyledTypography
      as={asTag}
      variant={variant}
      color={color}
      align={align}
      {...rest}
    >
      {children}
    </StyledTypography>
  )
}

export default Typography
