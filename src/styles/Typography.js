import React from 'react';
import styled, { css } from 'styled-components';

const StyledTypography = styled.span`
  margin: 0;
  padding: 0;

  /* Farbverarbeitung ausschließlich mit Theme */
  color: ${({ theme, color, variant }) => {
    const [colorKey, shade = 'main'] = (color || `${variant}.main`).split('.');
    return theme.colors[colorKey]?.[shade] || theme.colors.primary.main;
  }};

  /* Text-Ausrichtung */
  text-align: ${({ align }) => align || 'left'};

  /* Zeilenhöhe */
  line-height: ${({ theme, lineHeight }) =>
    lineHeight || theme.typography.lineHeight.normal};

  /* Varianten-Verarbeitung */
  ${({ variant, theme }) => {
    const variantStyles = {
      h1: css`
        font-size: ${theme.typography.fontSize.h1};
        font-weight: ${theme.typography.fontWeight.bold};
        line-height: ${theme.typography.lineHeight.tight};
        margin-bottom: ${theme.spacing(6)};
        @media (max-width: ${theme.breakpoints.md}) {
          font-size: ${theme.typography.fontSize.h2};
          margin-bottom: ${theme.spacing(4)};
        }
      `,
      h2: css`
        font-size: ${theme.typography.fontSize.h2};
        font-weight: ${theme.typography.fontWeight.medium};
        line-height: ${theme.typography.lineHeight.tight};
        margin-bottom: ${theme.spacing(5)};
        @media (max-width: ${theme.breakpoints.md}) {
          font-size: ${theme.typography.fontSize.h3};
          margin-bottom: ${theme.spacing(3)};
        }
      `,
      h3: css`
        font-size: ${theme.typography.fontSize.h3};
        font-weight: ${theme.typography.fontWeight.medium};
        line-height: ${theme.typography.lineHeight.normal};
        margin-bottom: ${theme.spacing(4)};
        @media (max-width: ${theme.breakpoints.md}) {
          font-size: ${theme.typography.fontSize.body};
          margin-bottom: ${theme.spacing(2)};
        }
      `,
      subhead: css`
        font-size: ${theme.typography.fontSize.h4};
        font-weight: ${theme.typography.fontWeight.medium};
        line-height: ${theme.typography.lineHeight.normal};
        margin-bottom: ${theme.spacing(3)};
        @media (max-width: ${theme.breakpoints.md}) {
          font-size: ${theme.typography.fontSize.small};
        }
      `,
      body: css`
        font-size: ${theme.typography.fontSize.body};
        font-weight: ${theme.typography.fontWeight.regular};
        line-height: ${theme.typography.lineHeight.normal};
        margin-bottom: ${theme.spacing(3)};
        @media (max-width: ${theme.breakpoints.md}) {
          font-size: ${theme.typography.fontSize.small};
          margin-bottom: ${theme.spacing(2)};
        }
      `,
      caption: css`
        font-size: ${theme.typography.fontSize.small};
        font-weight: ${theme.typography.fontWeight.light};
        line-height: ${theme.typography.lineHeight.tight};
        margin-bottom: ${theme.spacing(2)};
      `,
    };

    return variantStyles[variant] || variantStyles.body;
  }}
`;

function Typography({
  variant = 'body',
  color = null,
  align = 'left',
  lineHeight,
  children,
}) {
  const tagMap = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    subhead: 'h4',
    caption: 'span',
    body: 'p',
  };

  const asTag = tagMap[variant] || 'p';

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
  );
}

export default Typography;
