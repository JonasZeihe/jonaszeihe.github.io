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
  z-index: 12000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2vw;
  overflow: auto;
  background: ${({ theme }) =>
    theme.mode === 'dark' ? 'rgba(16,17,29,0.93)' : 'rgba(26,30,38,0.66)'};
  animation: ${fadeIn} 0.3s ease-out;
`

const Content = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  padding: ${({ theme }) => theme.spacing(4)};
  background: ${({ theme }) => theme.colors.surface.cardAlpha};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.boxShadow.lg};
  overflow-y: auto;
  overflow-x: hidden;
  outline: none;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) =>
    `${theme.colors.primary[2]} ${theme.colors.surface[1]}`};

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

const Close = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing(2)};
  right: ${({ theme }) => theme.spacing(2)};
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.surface[2]};
  color: ${({ theme }) => theme.colors.text.subtle};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  cursor: pointer;
  z-index: 10;
  transition:
    background 0.18s,
    color 0.18s;

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
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${scrollBarWidth}px`

    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [])

  useEffect(() => {
    const prev = document.activeElement
    modalRef.current?.focus()
    return () => prev?.focus?.()
  }, [])

  useEffect(() => {
    const trap = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key !== 'Tab') return

      const focusables = modalRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
      if (!focusables?.length) return

      const first = focusables[0]
      const last = focusables[focusables.length - 1]

      if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      } else if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      }
    }

    document.addEventListener('keydown', trap)
    return () => document.removeEventListener('keydown', trap)
  }, [onClose])

  if (typeof document === 'undefined') return null

  return ReactDOM.createPortal(
    <Overlay onClick={onClose} role="dialog" aria-modal="true">
      <Content
        ref={modalRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <Close onClick={onClose} aria-label="Modal schließen">
          <FaTimes size={20} />
        </Close>
        {children}
      </Content>
    </Overlay>,
    document.body
  )
}

export default ModalOverlay
