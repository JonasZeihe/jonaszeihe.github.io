import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Badge from '../common/Badge';
import Button from '../common/Button';

const HexagonWrapper = styled.div`
  position: relative;
  width: 240px;
  height: 280px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background-color: ${({ theme }) => theme.colors.neutral.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.boxShadow.heavy};
  }
`;

const Title = styled.h3`
  text-align: center;
  font-size: ${({ theme }) => theme.typography.fontSize.h4};
  color: ${({ theme }) => theme.colors.primary.main};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const ImageSection = styled.div`
  flex: 1;
  width: 100%;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  clip-path: polygon(50% 0%, 100% 25%, 100% 50%, 50% 75%, 0% 50%, 0% 25%);
`;

const ContentSection = styled.div`
  padding: ${({ theme }) => theme.spacing(2)};
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(1)};
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing(1)};
`;

const ButtonsSection = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(1)};
`;

export default function HoneycombCell({ project }) {
  return (
    <>
      <Title>{project.name}</Title>
      <HexagonWrapper>
        <ImageSection src={project.image} />
        <ContentSection>
          <p>{project.description}</p>
          <BadgeContainer>
            {project.badges.map((badge) => (
              <Badge
                key={badge.label}
                label={badge.label}
                icon={badge.icon}
                variant={badge.variant}
              />
            ))}
          </BadgeContainer>
        </ContentSection>
        <ButtonsSection>
          {project.buttons.map(({ label, onClick, variant }) => (
            <Button key={label} variant={variant} onClick={onClick}>
              {label}
            </Button>
          ))}
        </ButtonsSection>
      </HexagonWrapper>
    </>
  );
}

HoneycombCell.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    badges: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        icon: PropTypes.string,
        variant: PropTypes.string,
      })
    ).isRequired,
    buttons: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func,
        variant: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
};
