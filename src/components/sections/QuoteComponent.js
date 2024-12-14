import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Wrapper für das Zitat
const QuoteWrapper = styled.blockquote`
  position: relative;
  margin: ${({ theme }) => theme.spacing(3)} auto;
  padding: ${({ theme }) => theme.spacing(3)};
  max-width: 600px; /* Begrenzte Breite für bessere Lesbarkeit */
  background: ${({ theme }) => theme.colors.background.main};
  color: ${({ theme }) => theme.colors.neutral.white};
  font-style: italic;
  border-left: 8px solid ${({ theme }) => theme.colors.primary.main}; /* Breiterer Balken */
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.boxShadow.light};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing(3)};
    max-width: 90%; /* Mehr Platz auf kleineren Geräten */
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
    text-align: center; /* Zentriert auf kleineren Bildschirmen */
  }
`;

// Funktionale QuoteComponent
export default function QuoteComponent({ text, author }) {
  return (
    <QuoteWrapper>
      <QuoteText>{`"${text}"`}</QuoteText>
      {author && <AuthorText>- {author}</AuthorText>}
    </QuoteWrapper>
  );
}

QuoteComponent.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string,
};

QuoteComponent.defaultProps = {
  author: null, // Standardmäßig kein Author
};
