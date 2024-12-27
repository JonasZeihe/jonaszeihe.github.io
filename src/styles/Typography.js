import React from 'react';
import styled, { css } from 'styled-components';

const StyledTypography = styled.span`
  margin: 0;
  padding: 0;

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
        color: ${theme.colors.primary.dark};
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
        color: ${theme.colors.depth.main};
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
        color: ${theme.colors.accent.dark};
        @media (max-width: ${theme.breakpoints.md}) {
          font-size: ${theme.typography.fontSize.body};
          margin-bottom: ${theme.spacing(2)};
        }
      `,
      subhead: css`
        font-size: ${theme.typography.fontSize.body};
        font-weight: ${theme.typography.fontWeight.medium};
        line-height: ${theme.typography.lineHeight.normal};
        color: ${theme.colors.secondaryHighlight.dark};
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
        color: ${theme.colors.secondary.main};
        @media (max-width: ${theme.breakpoints.md}) {
          font-size: ${theme.typography.fontSize.small};
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
    };

    return variantStyles[variant] || variantStyles.body;
  }}
`;

function Typography({
  variant = 'body',
  color = 'neutral.dark',
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
