import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSwipeable } from 'react-swipeable';
import Lightbox from '../lightbox/Lightbox';
import Button from '../common/Button';

// Styled Components
const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: ${({ theme }) => theme?.breakpoints?.xl || '1200px'};
  margin: 0 auto;
`;

const SlideContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(calc(${({ activeIndex }) => -activeIndex} * 100%));
`;

const Slide = styled.div`
  flex: 0 0 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-height: 80vh;
    object-fit: cover;
    border-radius: ${({ theme }) => theme?.borderRadius?.medium || '8px'};
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const Controls = styled.div`
  position: absolute;
  top: 50%;
  display: flex;
  justify-content: space-between;
  width: 100%;
  transform: translateY(-50%);
  z-index: 10;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none; /* Hide controls for mobile views */
  }
`;

const Dot = styled.button`
  width: 10px;
  height: 10px;
  background: ${({ active, theme }) =>
    active
      ? theme?.colors?.primary?.main || '#007BFF'
      : theme?.colors?.neutral?.medium || '#CCCCCC'};
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme?.colors?.primary?.dark || '#0056b3'};
  }
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme?.spacing?.(3) || '12px'};
  gap: ${({ theme }) => theme?.spacing?.(1) || '8px'};
`;

// Carousel Component
function Carousel({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = () => setLightboxOpen(true);

  const navigate = (direction) => {
    setActiveIndex(
      (prev) => (prev + direction + slides.length) % slides.length
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => navigate(1),
    onSwipedRight: () => navigate(-1),
  });

  return (
    <>
      <Wrapper {...swipeHandlers}>
        <SlideContainer activeIndex={activeIndex}>
          {slides.map((slide) => (
            <Slide key={slide.id || `slide-${slide.src}`}>
              <button
                type="button"
                onClick={openLightbox}
                aria-label={`Open lightbox for slide ${slide.id || 'unknown'}`}
              >
                <img src={slide.src} alt={slide.alt || `Slide ${slide.id}`} />
              </button>
            </Slide>
          ))}
        </SlideContainer>
        <Controls>
          <Button
            type="button"
            variant="icon"
            size="medium"
            onClick={() => navigate(-1)}
            aria-label="Previous Slide"
          >
            {'<'}
          </Button>
          <Button
            type="button"
            variant="icon"
            size="medium"
            onClick={() => navigate(1)}
            aria-label="Next Slide"
          >
            {'>'}
          </Button>
        </Controls>
        <Dots>
          {slides.map((slide) => (
            <Dot
              key={slide.id || `dot-${slide.src}`}
              type="button"
              active={slides.indexOf(slide) === activeIndex}
              onClick={() => setActiveIndex(slides.indexOf(slide))}
              aria-label={`Go to slide ${slides.indexOf(slide) + 1}`}
            />
          ))}
        </Dots>
      </Wrapper>
      {lightboxOpen && (
        <Lightbox
          media={slides}
          currentIndex={activeIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}

// Prop Types
Carousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ).isRequired,
};

export default Carousel;
