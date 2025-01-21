import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;
`

const ContentWrapper = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;

  background-color: ${({ theme }) => theme.colors.neutral.ultraLight};
  color: ${({ theme }) => theme.colors.neutral.dark};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.boxShadow.heavy};

  padding: ${({ theme }) => theme.spacing(1)};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 95%;
    max-height: 85%;
    padding: ${({ theme }) => theme.spacing(1)};
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${({ theme }) => theme.colors.neutral.lightest};
  color: ${({ theme }) => theme.colors.neutral.darkest};
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
    background: ${({ theme }) =>
      theme.colors.primary.main}; /* Existierende Farbe */
    color: ${({ theme }) => theme.colors.neutral.ultraLight};
  }
`

export default function ModalOverlay({ onClose, children }) {
  const modalRef = useRef(null)

  // Fokus-Management
  useEffect(() => {
    const previousActiveElement = document.activeElement

    if (modalRef.current) {
      modalRef.current.focus()
    }

    return () => {
      if (previousActiveElement) {
        previousActiveElement.focus()
      }
    }
  }, [])

  // Escape-Taste zum Schließen des Modals
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  // Fallback für SSR (kein `document` vorhanden)
  if (typeof document === 'undefined') {
    return null
  }

  return ReactDOM.createPortal(
    <Overlay
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <ContentWrapper
        ref={modalRef}
        onClick={(e) => e.stopPropagation()} // Klicks innerhalb verhindern Schließen
        tabIndex={-1}
      >
        <CloseButton onClick={onClose} aria-label="Close Modal">
          <FaTimes size={20} />
        </CloseButton>
        {children}
      </ContentWrapper>
    </Overlay>,
    document.body
  )
}

ModalOverlay.propTypes = {
  /**
   * Funktion, um das Modal zu schließen.
   */
  onClose: PropTypes.func.isRequired,
  /**
   * Inhalt des Modals (JSX).
   */
  children: PropTypes.node.isRequired,
}
