// src/components/lightbox/ModalOverlay.js
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Overlay = styled.div`
  position: fixed;
  inset: 0; /* top: 0, left: 0, right: 0, bottom: 0 */
  background: rgba(0, 0, 0, 0.8);
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;

  background-color: ${({ theme }) => theme.colors.neutral.white};
  color: ${({ theme }) => theme.colors.neutral.dark};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.boxShadow.heavy};

  /* Abstände nach Wunsch */
  padding: ${({ theme }) => theme.spacing(4)};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${({ theme }) => theme.colors.neutral.lightest};
  color: ${({ theme }) => theme.colors.neutral.dark};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.warning?.main || 'red'};
    color: ${({ theme }) => theme.colors.neutral.white};
  }
`;

export default function ModalOverlay({ onClose, children }) {
  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      {/* Klick im Overlay-Hintergrund schließt das Modal */}
      <ContentWrapper onClick={(e) => e.stopPropagation()}>
        {/* Klick INHALB ContentWrapper stoppt das Schließen */}
        <CloseButton onClick={onClose} aria-label="Close Modal">
          <FaTimes size={20} />
        </CloseButton>
        {children}
      </ContentWrapper>
    </Overlay>,
    document.body
  );
}

ModalOverlay.propTypes = {
  /**
   * Schließt das Modal, wenn der Nutzer außerhalb klickt
   */
  onClose: PropTypes.func.isRequired,
  /**
   * Beliebiger JSX-Inhalt, z. B. dein Detail-Page-Komponent
   */
  children: PropTypes.node.isRequired,
};
