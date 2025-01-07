import React from 'react';
import styled from 'styled-components';
import { Button, Badge } from '../../utils/sharedComponents';

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
    background-color: ${({ theme }) => theme.colors.depth.lightest};
  }
`;

const Title = styled.h3`
  margin: 0 0 ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.colors.primary.dark};
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.fontSize.h3};
`;

const Description = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing(3)};
  color: ${({ theme }) => theme.colors.neutral.main};
  line-height: 1.6;
  flex: 1;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(1)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: ${({ theme }) => theme.spacing(2)};
`;

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) section.scrollIntoView({ behavior: 'smooth' });
};

export default function FeatureCard({
  title,
  description,
  tags = [],
  targetId,
}) {
  return (
    <CardWrapper>
      <div>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <TagContainer>
          {tags.map((tag) => (
            <Badge key={tag} label={tag} variant="secondary" />
          ))}
        </TagContainer>
      </div>
      <ButtonContainer>
        <Button
          variant="primary"
          size="small"
          onClick={() => scrollToSection(targetId)}
        >
          Zum Projekt
        </Button>
      </ButtonContainer>
    </CardWrapper>
  );
}
