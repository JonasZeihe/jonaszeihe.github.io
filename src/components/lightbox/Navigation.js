import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import getScale from './scale';

const ZoomableMedia = styled.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  cursor: ${({ isZoomed }) => (isZoomed ? 'grab' : 'zoom-in')};
  transform-origin: ${({ zoomOriginX, zoomOriginY }) =>
    `${zoomOriginX}% ${zoomOriginY}%`};
  transform: ${({ zoomLevel, panX, panY }) =>
    `translate(${panX}px, ${panY}px) scale(${getScale(zoomLevel)})`};
  transition: ${({ isPanning }) =>
    isPanning ? 'none' : 'transform 0.3s ease'};
`;

function Navigation({ src, alt = '', onClose }) {
  const [zoomLevel, setZoomLevel] = useState(0);
  const [zoomOriginX, setZoomOriginX] = useState(50);
  const [zoomOriginY, setZoomOriginY] = useState(50);
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);
  const [isPanning, setIsPanning] = useState(false);
  const [hasPanned, setHasPanned] = useState(false);
  const imgRef = useRef();

  const handleZoom = (e) => {
    e.preventDefault();
    if (hasPanned) {
      setHasPanned(false);
      return;
    }
    const rect = imgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    if (zoomLevel < 2) {
      setZoomOriginX(x);
      setZoomOriginY(y);
      setZoomLevel((prev) => prev + 1);
    } else {
      setZoomLevel(0);
      setPanX(0);
      setPanY(0);
    }
  };

  const constrainPan = (pan, maxPan) => {
    return Math.max(Math.min(pan, maxPan), -maxPan);
  };

  const handleMouseDown = (e) => {
    if (zoomLevel > 0) {
      e.preventDefault();
      setIsPanning(true);
      imgRef.current.dataset.startX = e.clientX - panX;
      imgRef.current.dataset.startY = e.clientY - panY;
    }
  };

  const handleMouseMove = (e) => {
    if (isPanning) {
      setHasPanned(true);
      const rect = imgRef.current.getBoundingClientRect();
      const scale = getScale(zoomLevel);
      const maxPanX = (rect.width * (scale - 1)) / 2;
      const maxPanY = (rect.height * (scale - 1)) / 2;

      const startX = parseFloat(imgRef.current.dataset.startX || 0);
      const startY = parseFloat(imgRef.current.dataset.startY || 0);
      setPanX(constrainPan(e.clientX - startX, maxPanX));
      setPanY(constrainPan(e.clientY - startY, maxPanY));
    }
  };

  const handleMouseUp = () => {
    setIsPanning(false);
  };

  const handleTouchStart = (e) => {
    if (zoomLevel > 0) {
      e.preventDefault();
      setIsPanning(true);
      const touch = e.touches[0];
      imgRef.current.dataset.startX = touch.clientX - panX;
      imgRef.current.dataset.startY = touch.clientY - panY;
    }
  };

  const handleTouchMove = (e) => {
    if (isPanning) {
      e.preventDefault();
      const rect = imgRef.current.getBoundingClientRect();
      const scale = getScale(zoomLevel);
      const maxPanX = (rect.width * (scale - 1)) / 2;
      const maxPanY = (rect.height * (scale - 1)) / 2;

      const touch = e.touches[0];
      const startX = parseFloat(imgRef.current.dataset.startX || 0);
      const startY = parseFloat(imgRef.current.dataset.startY || 0);
      setPanX(constrainPan(touch.clientX - startX, maxPanX));
      setPanY(constrainPan(touch.clientY - startY, maxPanY));
    }
  };

  const handleTouchEnd = () => {
    setIsPanning(false);
  };

  useEffect(() => {
    const preventScroll = (e) => {
      if (zoomLevel > 0) e.preventDefault();
    };
    document.addEventListener('touchmove', preventScroll, { passive: false });
    return () => {
      document.removeEventListener('touchmove', preventScroll);
    };
  }, [zoomLevel]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = zoomLevel > 0 ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [zoomLevel]);

  return (
    <ZoomableMedia
      ref={imgRef}
      src={src}
      alt={alt}
      zoomLevel={zoomLevel}
      zoomOriginX={zoomOriginX}
      zoomOriginY={zoomOriginY}
      panX={panX}
      panY={panY}
      isPanning={isPanning}
      onClick={handleZoom}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    />
  );
}

Navigation.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

Navigation.defaultProps = {
  alt: '',
};

export default Navigation;
