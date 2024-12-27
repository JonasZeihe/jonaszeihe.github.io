import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import SmoothScroller from '../utilities/SmoothScroller';

export default function Header({ navSections = [] }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // speichert, ob ein Submenü (z. B. "Python") auf Mobile offen oder zu ist
  const [openSubNav, setOpenSubNav] = useState(null);

  const handleLogoClick = () => {
    document
      .getElementById('Introduction')
      ?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
    setOpenSubNav(null);
  };

  // Klicken auf einen Top-Level-Menüpunkt auf Mobile
  // -> toggelt das entsprechende Submenü
  const handleMobileSubNavToggle = (sectionId) => {
    setOpenSubNav(openSubNav === sectionId ? null : sectionId);
  };

  // DESKTOP: Hauptnavi + Subnavi (Hover-Dropdown)
  const renderDesktopNav = () => (
    <DesktopNav>
      {navSections.map((section) => {
        const hasChildren = section.children && section.children.length > 0;
        return (
          <NavItemWrapper key={section.id}>
            {/* Top-Level-Menüpunkt */}
            <SmoothScroller targetId={section.id}>
              <NavItem onClick={() => setMenuOpen(false)}>
                {section.label}
              </NavItem>
            </SmoothScroller>

            {/* SubNav als Hover-Dropdown */}
            {hasChildren && (
              <SubNav className="subnav">
                {section.children.map((child) => (
                  <SmoothScroller key={child.id} targetId={child.id}>
                    <SubNavItem onClick={() => setMenuOpen(false)}>
                      {child.label}
                    </SubNavItem>
                  </SmoothScroller>
                ))}
              </SubNav>
            )}
          </NavItemWrapper>
        );
      })}
    </DesktopNav>
  );

  // MOBILE: Komplettes Menü (Burger → Dropdown),
  // aber Submenüs kollabierbar
  const renderMobileNav = () => (
    <MobileMenu>
      {navSections.map((section) => {
        const hasChildren = section.children && section.children.length > 0;

        return (
          <React.Fragment key={section.id}>
            {/* Top-Level-Menüpunkt */}
            {hasChildren ? (
              // Wenn wir Kinder haben (z. B. "Python"),
              // klickbares Toggle für SubNav
              <MobileToggleWrapper>
                <MobileTopItem
                  onClick={() => handleMobileSubNavToggle(section.id)}
                >
                  {section.label}
                  <ToggleIcon>
                    {openSubNav === section.id ? '▲' : '▼'}
                  </ToggleIcon>
                </MobileTopItem>

                {/* Kollabierbares SubNav */}
                <CollapsibleSubNav isOpen={openSubNav === section.id}>
                  {section.children.map((child) => (
                    <SmoothScroller key={child.id} targetId={child.id}>
                      <MobileSubNavItem onClick={() => setMenuOpen(false)}>
                        {child.label}
                      </MobileSubNavItem>
                    </SmoothScroller>
                  ))}
                </CollapsibleSubNav>
              </MobileToggleWrapper>
            ) : (
              // Wenn keine Kinder, direkt klickbarer Menüpunkt
              <SmoothScroller targetId={section.id}>
                <MobileTopItem
                  onClick={() => {
                    setMenuOpen(false);
                    setOpenSubNav(null);
                  }}
                >
                  {section.label}
                </MobileTopItem>
              </SmoothScroller>
            )}
          </React.Fragment>
        );
      })}
    </MobileMenu>
  );

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo onClick={handleLogoClick}>Jonas Zeihe</Logo>

        {/* Desktop-Navigation */}
        {renderDesktopNav()}

        {/* Burger-Icon für Mobile */}
        <MobileMenuButton
          onClick={() => {
            setMenuOpen(!menuOpen);
            setOpenSubNav(null);
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </MobileMenuButton>
      </HeaderContent>

      {/* Ausklappendes Mobile-Menü */}
      {menuOpen && renderMobileNav()}
    </HeaderContainer>
  );
}

/* --------------------------------------------
   STYLES
--------------------------------------------- */
const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: ${({ theme }) => theme.colors.primary.main};
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
`;

const HeaderContent = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* Etwas kleineres Padding für kompakteren Header */
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(3)};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing(2)};
  }
`;

const Logo = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.h3};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.neutral.white};
  cursor: pointer;
  /* Leichtes Hover-Highlight */
  &:hover {
    color: ${({ theme }) => theme.colors.accent.light};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.typography.fontSize.h2};
  }
`;

/* --------------------------------------------
   DESKTOP NAVIGATION
--------------------------------------------- */
const DesktopNav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

/* Gruppe: NavItem + (SubNav) */
const NavItemWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  /* Hover: Subnav anzeigen */
  &:hover .subnav {
    display: block;
  }
`;

const NavItem = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  color: ${({ theme }) => theme.colors.neutral.white};
  padding: ${({ theme }) => theme.spacing(1)} 0;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent.light};
  }
`;

/* SubNav: direkt unter dem Hauptpunkt, ohne Lücke */
const SubNav = styled.div`
  display: none;
  position: absolute;
  top: 100%; /* ohne zusätzliche Pixel */
  left: 0;
  min-width: 140px;
  background: ${({ theme }) => theme.colors.primary.dark};
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
  padding: ${({ theme }) => theme.spacing(1)} 0; /* etwas Innenabstand */
  border-radius: ${({ theme }) => theme.borderRadius.small};
  z-index: 999;
`;

const SubNavItem = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  color: ${({ theme }) => theme.colors.neutral.white};
  cursor: pointer;
  padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(2)}`};
  transition: background-color 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }
`;

/* --------------------------------------------
   MOBILE NAVIGATION (Burger-Menü)
--------------------------------------------- */
const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.neutral.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.primary.dark};
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(2)} 0;
  gap: ${({ theme }) => theme.spacing(1)};
  z-index: 999;
`;

const MobileTopItem = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  color: ${({ theme }) => theme.colors.neutral.white};
  cursor: pointer;
  padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(3)}`};
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }
`;

/* Kleines Symbol (▲ / ▼) rechts vom Titel */
const ToggleIcon = styled.span`
  margin-left: ${({ theme }) => theme.spacing(1)};
  font-size: 0.8em;
  color: ${({ theme }) => theme.colors.accent.light};
`;

const MobileToggleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CollapsibleSubNav = styled.div`
  /* Kollaps-Animation: max-height = 0 → max-height: NNNpx */
  overflow: hidden;
  transition:
    max-height 0.3s ease,
    padding 0.3s ease;

  ${({ isOpen, theme }) =>
    isOpen
      ? css`
          max-height: 300px; /* ein großzügiger Wert für SubNav-Höhe */
          padding-top: ${theme.spacing(1)};
        `
      : css`
          max-height: 0;
          padding-top: 0;
        `}
`;

const MobileSubNavItem = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  color: ${({ theme }) => theme.colors.neutral.white};
  cursor: pointer;
  padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(5)}`};
  transition: background-color 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }
`;
