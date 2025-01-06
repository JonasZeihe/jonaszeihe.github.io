// FeatureCard.js
import React from 'react';
import styled from 'styled-components';
import { Button, Badge } from '../../utils/sharedComponents';
// oder je nachdem, ob du Button/Badge nutzt

// ------------------------------------
// Styled Components
// ------------------------------------
const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral.white};
  border: 1px solid ${({ theme }) => theme.colors.neutral.lighter};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing(3)};
  box-shadow: ${({ theme }) => theme.boxShadow.light};
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.boxShadow.medium};
  }
`;

const Title = styled.h3`
  margin: 0 0 ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.colors.primary.dark};
  font-weight: 700;
  font-size: 1.25rem;
`;

const Description = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing(3)};
  color: ${({ theme }) => theme.colors.neutral.main};
  line-height: 1.4;
  flex: 1; /* füllt Platz, damit Buttons unten bleiben */
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(1)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

// ------------------------------------
// FeatureCard Component
// ------------------------------------
export default function FeatureCard({
  title,
  description,
  tags = [],
  onLearnMore, // optional callback für "Mehr erfahren"
}) {
  return (
    <CardWrapper>
      <div>
        <Title>{title}</Title>
        <Description>{description}</Description>

        {tags.length > 0 && (
          <TagContainer>
            {tags.map((tag) => (
              // Beispiel: Du könntest hier
              // <Badge label={tag} variant="primary" /> verwenden,
              // wenn du dein Badge-Component willst
              <Badge key={tag} label={tag} icon={null} variant="secondary" />
            ))}
          </TagContainer>
        )}
      </div>

      {/* Optionaler Button-Bereich */}
      {onLearnMore && (
        <Button
          variant="primary"
          size="small"
          onClick={onLearnMore}
          style={{ alignSelf: 'flex-start' }}
        >
          Mehr erfahren
        </Button>
      )}
    </CardWrapper>
  );
}
