import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Wrapper für das Zitat
const QuoteWrapper = styled.blockquote`
  position: relative;
  margin: ${({ theme }) => theme.spacing(3)} auto;
  padding: ${({ theme }) => theme.spacing(4)};
  max-width: 600px;
  background: ${({ theme, backgroundColor }) =>
    theme.colors[backgroundColor] || theme.colors.neutral.main};
  color: ${({ theme }) => theme.colors.neutral.ultraLight};
  font-style: italic;
  border-left: 6px solid
    ${({ theme, borderColor }) =>
      theme.colors[borderColor] || theme.colors.primary.main};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.boxShadow.medium};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing(3)};
    max-width: 90%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing(2)};
  }
`;

// Styling für den Zitattext
const QuoteText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.h3};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin: 0;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.body};
  }
`;

// Optionaler Author-Wrapper
const AuthorText = styled.p`
  margin: ${({ theme }) => theme.spacing(2)} 0 0;
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-align: right;
  color: ${({ theme }) => theme.colors.neutral.medium};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.body};
    text-align: center;
  }
`;

// Funktionale QuoteComponent
export default function QuoteComponent({
  text,
  author,
  backgroundColor,
  borderColor,
}) {
  return (
    <QuoteWrapper backgroundColor={backgroundColor} borderColor={borderColor}>
      <QuoteText>{`"${text}"`}</QuoteText>
      {author && <AuthorText>- {author}</AuthorText>}
    </QuoteWrapper>
  );
}

QuoteComponent.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string,
  backgroundColor: PropTypes.string, // Dynamischer Hintergrund
  borderColor: PropTypes.string, // Dynamische Farbe für den Balken
};

QuoteComponent.defaultProps = {
  author: null,
  backgroundColor: 'neutral.main',
  borderColor: 'primary.main',
};
