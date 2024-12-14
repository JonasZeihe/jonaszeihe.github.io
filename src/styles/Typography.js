import React from 'react';
import styled, { css } from 'styled-components';

// Styled Component für die Typografie
const StyledTypography = styled.span`
  margin: 0;
  padding: 0;

  // Farbe aus dem Theme
  color: ${({ theme, color }) => {
    const [colorKey, shade] = (color || 'primary.main').split('.');
    return theme.colors[colorKey]?.[shade] || theme.colors.primary.main;
  }};

  text-align: ${({ align }) => align || 'left'};
  line-height: ${({ theme, lineHeight }) =>
    lineHeight || theme.typography.lineHeight.normal};

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
        font-weight: ${theme.typography.fontWeight.bold};
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
      caption: css`
        font-size: ${theme.typography.fontSize.small};
        font-weight: ${theme.typography.fontWeight.light};
        line-height: ${theme.typography.lineHeight.tight};
        color: ${theme.colors.neutral.medium};
        margin-bottom: ${theme.spacing(2)};
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
    };

    return variantStyles[variant] || variantStyles.body;
  }}
`;

// Funktionale Typography-Komponente
function Typography({
  variant = 'body',
  color = 'neutral.dark',
  align = 'left',
  lineHeight,
  children,
}) {
  // Tag-Mapping
  const tagMap = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
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
