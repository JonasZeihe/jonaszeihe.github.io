// FeatureCard.js
import React from 'react';
import styled from 'styled-components';

// ------------------------------------
// Styled Components
// ------------------------------------
const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral.lightest};
  border: 1px solid ${({ theme }) => theme.colors.neutral.lighter};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
`;

const Title = styled.h3`
  margin: 0 0 0.5rem 0;
  color: ${({ theme }) => theme.colors.primary.dark};
  font-weight: 700;
  font-size: 1.25rem;
`;

const Description = styled.p`
  margin: 0 0 1rem 0;
  color: ${({ theme }) => theme.colors.neutral.main};
  line-height: 1.4;
`;

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TagItem = styled.span`
  background-color: ${({ theme }) => theme.colors.primary.light};
  color: ${({ theme }) => theme.colors.primary.dark};
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
`;

// ------------------------------------
// FeatureCard Component
// ------------------------------------
export default function FeatureCard({ title, description, tags = [] }) {
  return (
    <CardWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {tags.length > 0 && (
        <TagsWrapper>
          {tags.map((tag) => (
            <TagItem key={tag}>{tag}</TagItem>
          ))}
        </TagsWrapper>
      )}
    </CardWrapper>
  );
}
