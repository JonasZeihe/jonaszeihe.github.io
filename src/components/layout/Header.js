import React, { useReducer, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { FiChevronDown, FiChevronUp, FiX, FiMenu } from 'react-icons/fi'
import SmoothScroller from '../utilities/SmoothScroller'
import ThemeToggleButton from '../common/ThemeToggleButton'

export default function Header({ navSections = [] }) {
  const headerRef = useRef()
  const [activeSection, setActiveSection] = useState(null)

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
    const offsets = navSections.map((section) => ({
      id: section.id,
      offsetTop: document.getElementById(section.id)?.offsetTop || 0,
    }))

    const scrollPosition = window.scrollY + window.innerHeight / 2

    const currentSection = offsets
      .filter(({ offsetTop }) => scrollPosition >= offsetTop)
      .pop()

    if (currentSection?.id !== activeSection) {
      setActiveSection(currentSection?.id)
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
              <NavItem isActive={activeSection === section.id}>
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
                <NavItem isActive={activeSection === section.id}>
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
        <LeftSide>
          <Logo onClick={scrollToTop}>Jonas Zeihe</Logo>
        </LeftSide>
        <RightSide>
          <DesktopOnly>
            {renderDesktopNav()}
            <ThemeToggleButton />
          </DesktopOnly>
          <MobileOnly>
            <ThemeToggleButton />
            <MobileMenuButton
              onClick={() => dispatch({ type: 'TOGGLE_MENU' })}
              aria-label={state.menuOpen ? 'Close menu' : 'Open menu'}
            >
              {state.menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </MobileMenuButton>
          </MobileOnly>
        </RightSide>
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
  background-color: ${({ theme }) => theme.colors.neutral.ultraLight};
  backdrop-filter: blur(10px);
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
`

const HeaderContent = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(2)};
`

const LeftSide = styled.div`
  display: flex;
  align-items: center;
`

const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
`

const Logo = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.h4};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.neutral.darkest};
  &:hover {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`

const DesktopOnly = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`

const MobileOnly = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`

const DesktopNav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing(8)};
`

const NavItemWrapper = styled.div`
  position: relative;
  &:hover > div {
    display: block;
  }
`

const NavItem = styled.div`
  font-size: ${({ theme }) => theme.typography.h3};
  cursor: pointer;
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary.main : theme.colors.neutral.darkest};
  font-weight: ${({ isActive, theme }) =>
    isActive
      ? theme.typography.fontWeight.bold
      : theme.typography.fontWeight.regular};
  &:hover {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`

const SubNav = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  color: ${({ theme }) => theme.colors.neutral.darkest};
  background: ${({ theme }) => theme.colors.neutral.ultraLight};
  padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(2)}`};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.boxShadow.light};
  display: none;
`

const SubNavItem = styled.div`
  cursor: pointer;
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary.main : theme.colors.neutral.dark};
  padding: ${({ theme }) => theme.spacing(1)};
  &:hover {
    color: ${({ theme }) => theme.colors.primary.main};
    background-color: ${({ theme }) => theme.colors.neutral.ultraLight};
  }
`

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.neutral.darkest};
`

const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.neutral.ultraLight};
  padding: ${({ theme }) => theme.spacing(3)};
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
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
  padding: ${({ theme }) => theme.spacing(1)};
  color: ${({ theme }) => theme.colors.neutral.darkest};
  &:hover {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`

const MobileSubNav = styled.div`
  overflow: hidden;
  transition:
    max-height 0.3s ease,
    opacity 0.3s ease;
  max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
  padding-left: ${({ theme }) => theme.spacing(4)};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(2)};

  & > div {
    font-size: ${({ theme }) => theme.typography.body};
    color: ${({ theme }) => theme.colors.neutral.darkest};
    padding: ${({ theme }) => theme.spacing(1)};
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.light};
    background-color: ${({ theme }) => theme.colors.neutral.ultraLight};
    border-radius: ${({ theme }) => theme.borderRadius.small};

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.primary.main};
      background-color: ${({ theme }) => theme.colors.neutral.lightest};
    }
  }
`
