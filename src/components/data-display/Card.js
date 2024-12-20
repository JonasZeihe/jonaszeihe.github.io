import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CardWrapper from '../Wrapper/CardWrapper';
import ContentWrapper from '../Wrapper/ContentWrapper';
import Typography from '../../styles/Typography';
import MediaDisplay from './MediaDisplay';
import Button from '../common/Button';

const MediaWrapper = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;

  img,
  video {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(3)};
`;

function Card({ title, media, description, buttons }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handleOpenLightbox = () => setLightboxOpen(true);
  const handleCloseLightbox = () => setLightboxOpen(false);

  return (
    <CardWrapper>
      <MediaWrapper onClick={handleOpenLightbox}>
        <MediaDisplay media={media} />
      </MediaWrapper>

      <ContentWrapper backgroundColor="neutral.white">
        <CardContent>
          <Typography variant="h3" color="primary.main">
            {title}
          </Typography>
          <Typography variant="body" color="neutral.dark">
            {description}
          </Typography>
          <ButtonContainer>
            {buttons.map((button) => (
              <Button
                key={button.label}
                variant={button.variant || 'primary'}
                onClick={button.onClick}
              >
                {button.label}
              </Button>
            ))}
          </ButtonContainer>
        </CardContent>
      </ContentWrapper>

      {lightboxOpen && (
        <MediaDisplay
          media={media}
          currentIndex={0}
          onClose={handleCloseLightbox}
        />
      )}
    </CardWrapper>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  media: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['image', 'video']).isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ).isRequired,
  description: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
      variant: PropTypes.string,
    })
  ),
};

Card.defaultProps = {
  buttons: [],
};

export default Card;
