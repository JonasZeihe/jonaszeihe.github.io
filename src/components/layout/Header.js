import React, { useState } from 'react';
import styled from 'styled-components';
import SmoothScroller from '../utilities/SmoothScroller';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [{ id: 'introduction', label: 'Einführung' }];

  const handleLogoClick = () => {
    document
      .getElementById('introduction')
      ?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const renderNavItems = () =>
    sections.map(({ id, label }) => (
      <SmoothScroller key={id} targetId={id}>
        <NavItem onClick={() => setMenuOpen(false)}>{label}</NavItem>
      </SmoothScroller>
    ));

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo onClick={handleLogoClick}>Jonas Zeihe</Logo>
        <DesktopNav>{renderNavItems()}</DesktopNav>
        <MobileMenuButton onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </MobileMenuButton>
      </HeaderContent>
      {menuOpen && <MobileMenu>{renderNavItems()}</MobileMenu>}
    </HeaderContainer>
  );
}

// **Styles**
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
  padding: ${({ theme }) => theme.spacing(4)};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing(2)};
  }
`;

const Logo = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.h2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.neutral.white};
  cursor: pointer;
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavItem = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  color: ${({ theme }) => theme.colors.neutral.white};
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.25rem;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.accent.main};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent.main};

    &::after {
      width: 100%;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.neutral.white};
    padding: ${({ theme }) => theme.spacing(1)};
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.primary.dark};
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(4)} 0;
  gap: ${({ theme }) => theme.spacing(2)};
  z-index: 999;

  ${NavItem} {
    font-size: ${({ theme }) => theme.typography.fontSize.h3};
  }
`;
