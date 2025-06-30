import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import styled, { keyframes } from 'styled-components'
import { FaTimes } from 'react-icons/fa'

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: ${({ theme }) =>
    theme.mode === 'dark' ? 'rgba(16,17,29,0.93)' : 'rgba(26,30,38,0.66)'};
  z-index: 12000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.3s ease-out;
  overflow: auto;
  padding: 2vw;
`

const ContentWrapper = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  background: ${({ theme }) =>
    theme.mode === 'dark'
      ? theme.colors.surface.cardAlpha
      : theme.colors.surface.cardAlpha};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.boxShadow.heavy};
  padding: ${({ theme }) => theme.spacing(4)};
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.colors.primary[2]}
    ${({ theme }) => theme.colors.surface[1]};
  outline: none;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.surface[1]};
    border-radius: ${({ theme }) => theme.borderRadius.large};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary[2]};
    border-radius: ${({ theme }) => theme.borderRadius.large};
    border: 2px solid ${({ theme }) => theme.colors.surface[1]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 95%;
    max-height: 85%;
    padding: ${({ theme }) => theme.spacing(2)};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing(2)};
  right: ${({ theme }) => theme.spacing(2)};
  background: ${({ theme }) => theme.colors.surface[2]};
  color: ${({ theme }) => theme.colors.text.subtle};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.3rem;
  transition:
    background 0.18s,
    color 0.18s;
  z-index: 10;
  &:hover,
  &:focus-visible {
    background: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.surface[1]};
    outline: none;
  }
`

function ModalOverlay({ onClose, children }) {
  const modalRef = useRef(null)

  useEffect(() => {
    const originalBodyOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = originalBodyOverflow
    }
  }, [])

  useEffect(() => {
    const prevActive = document.activeElement
    if (modalRef.current) modalRef.current.focus()
    return () => {
      if (prevActive && prevActive.focus) prevActive.focus()
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll(
          'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"])'
        )
        if (!focusable.length) {
          e.preventDefault()
          return
        }
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (typeof document === 'undefined') return null

  return ReactDOM.createPortal(
    <Overlay
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <ContentWrapper
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <CloseButton onClick={onClose} aria-label="Modal schließen">
          <FaTimes size={20} />
        </CloseButton>
        {children}
      </ContentWrapper>
    </Overlay>,
    document.body
  )
}

export default ModalOverlay
