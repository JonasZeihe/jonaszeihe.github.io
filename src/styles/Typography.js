import styled, { css } from 'styled-components'

const TAG_MAP = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  subhead: 'h4',
  body: 'p',
  caption: 'span',
}

const variantCSS = (v, t) => {
  const {
    typography: { fontSize, fontWeight, lineHeight, letterSpacing },
    spacing,
    colors: {
      accent: { main: accent },
      text: { main, subtle },
    },
  } = t
  const s = spacing
  switch (v) {
    case 'h1':
      return css`
        font-size: ${fontSize.h1};
        font-weight: ${fontWeight.bold};
        line-height: ${lineHeight.tight};
        letter-spacing: ${letterSpacing.tight};
        margin-bottom: ${s(5)};
        color: ${main};
      `
    case 'h2':
      return css`
        font-size: ${fontSize.h2};
        font-weight: ${fontWeight.medium};
        line-height: ${lineHeight.tight};
        letter-spacing: ${letterSpacing.tight};
        margin-bottom: ${s(4)};
        color: ${main};
      `
    case 'h3':
      return css`
        font-size: ${fontSize.h3};
        font-weight: ${fontWeight.medium};
        line-height: ${lineHeight.normal};
        letter-spacing: ${letterSpacing.normal};
        margin-bottom: ${s(3)};
        color: ${main};
      `
    case 'subhead':
      return css`
        font-size: ${fontSize.body};
        font-weight: ${fontWeight.medium};
        line-height: ${lineHeight.normal};
        margin-bottom: ${s(2)};
        color: ${accent};
      `
    case 'caption':
      return css`
        font-size: ${fontSize.small};
        font-weight: ${fontWeight.light};
        line-height: ${lineHeight.tight};
        margin-bottom: ${s(1)};
        color: ${subtle};
      `
    default:
      return css`
        font-size: ${fontSize.body};
        font-weight: ${fontWeight.regular};
        line-height: ${lineHeight.normal};
        margin-bottom: ${s(2)};
        color: ${main};
      `
  }
}

const applyCustomColor = (c, t) => css`
  color: ${(() => {
    const [g, tone = 'main'] = c.split('.')
    return t.colors[g]?.[tone] || t.colors.text?.[tone] || c
  })()};
`

const StyledTypography = styled.span`
  margin: 0;
  padding: 0;
  text-align: ${({ align }) => align};
  ${({ variant, theme }) => variantCSS(variant, theme)}
  ${({ color, theme }) => (color ? applyCustomColor(color, theme) : '')}
`

function Typography({
  variant = 'body',
  color,
  align = 'left',
  children,
  ...rest
}) {
  const asTag = TAG_MAP[variant] || 'p'
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
