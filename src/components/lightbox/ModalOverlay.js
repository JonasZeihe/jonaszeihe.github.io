import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import styled, { keyframes } from 'styled-components'
import { FaTimes } from 'react-icons/fa'

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.3s ease-out;
  overflow-x: hidden;
`

const ContentWrapper = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.colors.neutral.ultraLight};
  color: ${({ theme }) => theme.colors.neutral.dark};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.boxShadow.heavy};
  padding: ${({ theme }) => theme.spacing(2)};
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.colors.neutral.dark}
    ${({ theme }) => theme.colors.neutral.ultraLight};

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.neutral.ultraLight};
    border-radius: ${({ theme }) => theme.borderRadius.large};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.neutral.dark};
    border-radius: ${({ theme }) => theme.borderRadius.large};
    border: 2px solid ${({ theme }) => theme.colors.neutral.ultraLight};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 95%;
    max-height: 85%;
    padding: ${({ theme }) => theme.spacing(2)};
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing(2)};
  right: ${({ theme }) => theme.spacing(2)};
  background: ${({ theme }) => theme.colors.neutral.lightest};
  color: ${({ theme }) => theme.colors.neutral.darkest};
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    background 0.3s ease,
    color 0.3s ease;
  z-index: 10;
  &:hover {
    background: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.neutral.ultraLight};
  }
`

function ModalOverlay({ onClose, children }) {
  const modalRef = useRef(null)

  useEffect(() => {
    const originalBodyOverflow = document.body.style.overflow
    const originalBodyMargin = document.body.style.margin
    const originalHtmlOverflow = document.documentElement.style.overflow
    const originalHtmlMargin = document.documentElement.style.margin
    document.body.style.overflow = 'hidden'
    document.body.style.margin = '0'
    document.documentElement.style.overflow = 'hidden'
    document.documentElement.style.margin = '0'
    return () => {
      document.body.style.overflow = originalBodyOverflow
      document.body.style.margin = originalBodyMargin
      document.documentElement.style.overflow = originalHtmlOverflow
      document.documentElement.style.margin = originalHtmlMargin
    }
  }, [])

  useEffect(() => {
    const previousActiveElement = document.activeElement
    if (modalRef.current) modalRef.current.focus()
    return () => {
      if (previousActiveElement && previousActiveElement.focus)
        previousActiveElement.focus()
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll(
          'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"])'
        )
        if (focusable.length === 0) {
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
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
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
        <CloseButton onClick={onClose} aria-label="Close Modal">
          <FaTimes size={20} />
        </CloseButton>
        {children}
      </ContentWrapper>
    </Overlay>,
    document.body
  )
}

export default ModalOverlay
