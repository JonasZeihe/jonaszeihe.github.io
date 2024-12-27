import React from 'react';
import styled from 'styled-components';
import CardWrapper from '../Wrapper/CardWrapper';
import Typography from '../../styles/Typography';
import Button from '../common/Button';

const MediaWrapper = styled.div`
  position: relative;
  height: 240px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  margin-bottom: ${({ theme }) => theme.spacing(3)};

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(3)};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: flex-start;
  }
`;

export default function Card({
  title,
  media,
  description,
  children,
  buttons,
  onMediaClick,
}) {
  return (
    <CardWrapper>
      {media && (
        <MediaWrapper onClick={onMediaClick}>
          <img
            src={media.src}
            alt={media.alt || 'Media'}
            style={{ pointerEvents: onMediaClick ? 'auto' : 'none' }}
          />
        </MediaWrapper>
      )}
      <ContentContainer>
        {title && (
          <Typography variant="h3" color="primary.dark">
            {title}
          </Typography>
        )}
        {description && (
          <Typography variant="body" color="neutral.main">
            {description}
          </Typography>
        )}
        {children}
      </ContentContainer>
      {buttons?.length > 0 && (
        <ButtonContainer>
          {buttons.map(({ label, onClick, variant }) => (
            <Button
              key={`button-${label}`}
              variant={variant || 'primary'}
              onClick={onClick}
            >
              {label}
            </Button>
          ))}
        </ButtonContainer>
      )}
    </CardWrapper>
  );
}
