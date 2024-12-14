import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useSwipeable } from 'react-swipeable';
import Navigation from './Navigation';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const ContentWrapper = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  overflow: hidden;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.8);
  color: black;
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  z-index: 1000;

  &:hover {
    background: red;
    color: white;
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  ${({ direction }) => (direction === 'left' ? 'left: 1rem;' : 'right: 1rem;')}
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  z-index: 1000;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

function Lightbox({ media, currentIndex = 0, onClose }) {
  const [activeIndex, setActiveIndex] = useState(currentIndex);

  const isCarousel = media.length > 1;
  const isDesktop = window.innerWidth >= 768;

  const navigate = (direction) => {
    setActiveIndex(
      (prevIndex) => (prevIndex + direction + media.length) % media.length
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => isCarousel && navigate(1),
    onSwipedRight: () => isCarousel && navigate(-1),
  });

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const activeMedia = media[activeIndex];

  return ReactDOM.createPortal(
    <Overlay onClick={onClose} {...swipeHandlers}>
      <ContentWrapper onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} aria-label="Close">
          <FaTimes size={20} />
        </CloseButton>
        {activeMedia.type === 'image' ? (
          <Navigation
            src={activeMedia.src}
            alt={activeMedia.alt}
            onClose={onClose}
          />
        ) : (
          <video src={activeMedia.src} controls autoPlay>
            <track kind="captions" srcLang="en" label="English" />
          </video>
        )}
        {isCarousel && isDesktop && (
          <>
            <NavigationButton
              direction="left"
              onClick={() => navigate(-1)}
              aria-label="Previous"
            >
              <FaChevronLeft size={20} />
            </NavigationButton>
            <NavigationButton
              direction="right"
              onClick={() => navigate(1)}
              aria-label="Next"
            >
              <FaChevronRight size={20} />
            </NavigationButton>
          </>
        )}
      </ContentWrapper>
    </Overlay>,
    document.body
  );
}

Lightbox.propTypes = {
  media: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['image', 'video']).isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ).isRequired,
  currentIndex: PropTypes.number,
  onClose: PropTypes.func.isRequired,
};

Lightbox.defaultProps = {
  currentIndex: 0,
};

export default Lightbox;
