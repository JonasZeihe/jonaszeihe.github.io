import React, { useReducer, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { FiChevronDown, FiChevronUp, FiX, FiMenu } from 'react-icons/fi'
import SmoothScroller from '../utilities/SmoothScroller'

export default function Header({ navSections = [] }) {
  const headerRef = useRef()
  const [activeSection, setActiveSection] = useState(null)
  const [highlightedParent, setHighlightedParent] = useState(null)

  const initialState = { menuOpen: false, openSubNav: null }

  function reducer(state, action) {
    switch (action.type) {
      case 'TOGGLE_MENU':
        return { ...state, menuOpen: !state.menuOpen, openSubNav: null }
      case 'TOGGLE_SUBNAV':
        return {
          ...state,
          openSubNav:
            state.openSubNav === action.payload ? null : action.payload,
        }
      case 'CLOSE_MENU':
        return initialState
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleScroll = () => {
    const offsets = navSections.flatMap((section) => [
      {
        id: section.id,
        offsetTop: document.getElementById(section.id)?.offsetTop || 0,
      },
      ...(section.children || []).map((child) => ({
        id: child.id,
        offsetTop: document.getElementById(child.id)?.offsetTop || 0,
        parentId: section.id,
      })),
    ])
    const scrollPosition = window.scrollY + window.innerHeight / 2
    const currentSection = offsets
      .filter(({ offsetTop }) => scrollPosition >= offsetTop)
      .pop()
    if (currentSection?.id !== activeSection) {
      setActiveSection(currentSection?.id)
      setHighlightedParent(currentSection?.parentId || currentSection?.id)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeSection])

  const renderSubNavItems = (children) =>
    children.map((child) => (
      <SmoothScroller key={child.id} targetId={child.id}>
        <SubNavItem isActive={activeSection === child.id}>
          {child.label}
        </SubNavItem>
      </SmoothScroller>
    ))

  const renderDesktopNav = () => (
    <DesktopNav>
      {navSections.map((section) => {
        const hasChildren = section.children && section.children.length > 0
        return (
          <NavItemWrapper key={section.id}>
            <SmoothScroller targetId={section.id}>
              <NavItem isActive={highlightedParent === section.id}>
                {section.label}
              </NavItem>
            </SmoothScroller>
            {hasChildren && (
              <SubNav>{renderSubNavItems(section.children)}</SubNav>
            )}
          </NavItemWrapper>
        )
      })}
    </DesktopNav>
  )

  const renderMobileNav = () => (
    <MobileMenu>
      {navSections.map((section) => {
        const hasChildren = section.children && section.children.length > 0
        return (
          <React.Fragment key={section.id}>
            <MobileNavItem>
              <SmoothScroller targetId={section.id}>
                <NavItem isActive={highlightedParent === section.id}>
                  {section.label}
                </NavItem>
              </SmoothScroller>
              {hasChildren && (
                <DropdownToggle
                  onClick={() =>
                    dispatch({ type: 'TOGGLE_SUBNAV', payload: section.id })
                  }
                  aria-label={
                    state.openSubNav === section.id
                      ? 'Close submenu'
                      : 'Open submenu'
                  }
                >
                  {state.openSubNav === section.id ? (
                    <FiChevronUp size={16} />
                  ) : (
                    <FiChevronDown size={16} />
                  )}
                </DropdownToggle>
              )}
            </MobileNavItem>
            {hasChildren && (
              <MobileSubNav isOpen={state.openSubNav === section.id}>
                {renderSubNavItems(section.children)}
              </MobileSubNav>
            )}
          </React.Fragment>
        )
      })}
    </MobileMenu>
  )

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    dispatch({ type: 'CLOSE_MENU' })
  }

  return (
    <HeaderContainer ref={headerRef}>
      <HeaderContent>
        <Logo onClick={scrollToTop}>Jonas Zeihe</Logo>
        <DesktopOnly>{renderDesktopNav()}</DesktopOnly>
        <MobileOnly>
          <MobileMenuButton
            onClick={() => dispatch({ type: 'TOGGLE_MENU' })}
            aria-label={state.menuOpen ? 'Close menu' : 'Open menu'}
          >
            {state.menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </MobileMenuButton>
        </MobileOnly>
      </HeaderContent>
      {state.menuOpen && <MobileOnly>{renderMobileNav()}</MobileOnly>}
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  color: #333;
  &:hover {
    color: #007bff;
  }
`

const DesktopOnly = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`

const MobileOnly = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`

const DesktopNav = styled.nav`
  display: flex;
  gap: 2rem;
`

const NavItemWrapper = styled.div`
  position: relative;
  &:hover > div {
    display: block;
  }
`

const NavItem = styled.div`
  font-size: 1rem;
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? '#007bff' : '#333')};
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  &:hover {
    color: #007bff;
  }
`

const SubNav = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: #f9f9f9;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: none;
`

const SubNavItem = styled.div`
  font-size: 0.9rem;
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? '#007bff' : '#333')};
  padding: 0.4rem 0;
  &:hover {
    color: #007bff;
  }
`

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
`

const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const MobileNavItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const DropdownToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  color: #333;
  &:hover {
    color: #007bff;
  }
`

const MobileSubNav = styled.div`
  overflow: hidden;
  transition:
    max-height 0.3s ease,
    opacity 0.3s ease;
  max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
  padding-left: 2rem; /* Zusätzliche Einrückung */
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* Abstand zwischen den Elementen */
  padding: 0.5rem 1rem; /* Innenabstand mit seitlicher Einrückung */

  & > div {
    font-size: 0.9rem;
    color: #333;
    padding: 0.5rem;
    border-bottom: 1px solid #eee;
    background-color: #ffffff; /* Optional: Weißer Hintergrund für die Items */
    border-radius: 4px; /* Optional: Leichte Abrundung für die Items */

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      color: #007bff;
      background-color: #f1f1f1; /* Leichte Farbänderung beim Hover */
    }
  }
`
