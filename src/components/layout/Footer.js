import React from "react";
import styled from "styled-components";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
    document.body.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FooterWrapper>
      <FooterContent>
        <LogoSection>
          <FooterDescription>
            Die App für echte Verbindungen – für authentische Freundschaften und
            nachhaltige Begegnungen.
          </FooterDescription>
          <SocialIcons>
            <IconLink href="https://facebook.com" aria-label="Facebook">
              <FaFacebook />
            </IconLink>
            <IconLink href="https://twitter.com" aria-label="Twitter">
              <FaTwitter />
            </IconLink>
            <IconLink href="https://instagram.com" aria-label="Instagram">
              <FaInstagram />
            </IconLink>
            <IconLink href="https://linkedin.com" aria-label="LinkedIn">
              <FaLinkedin />
            </IconLink>
          </SocialIcons>
        </LogoSection>
        <FooterGrid>
          <FooterColumn>
            <FooterTitle>Kontakt</FooterTitle>
            <FooterLinks>
              <FooterLink href="mailto:contact@kim-app.com">
                contact@kim-app.com
              </FooterLink>
              <FooterLink href="tel:+49123456789">+49 123 456 789</FooterLink>
            </FooterLinks>
          </FooterColumn>
        </FooterGrid>
      </FooterContent>
      <FooterBottom>
        <Copyright>
          © {new Date().getFullYear()} KIM App. Alle Rechte vorbehalten.
        </Copyright>
        <ScrollToTopButton onClick={scrollToTop}>
          <FaArrowUp />
        </ScrollToTopButton>
      </FooterBottom>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.primary.dark};
  color: ${({ theme }) => theme.colors.neutral.white};
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterContent = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.xl};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(6)};
`;

const LogoSection = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
`;

const FooterDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  color: ${({ theme }) => theme.colors.neutral.light};
  max-width: 600px;
  margin: 0 auto;
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

const SocialIcons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
`;

const IconLink = styled.a`
  color: ${({ theme }) => theme.colors.neutral.white};
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent.main};
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing(6)};
  width: 100%;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
`;

const FooterTitle = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSize.h3};
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.neutral.white};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent.main};
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin-top: ${({ theme }) => theme.spacing(6)};
  font-size: ${({ theme }) => theme.typography.fontSize.detail};
  color: ${({ theme }) => theme.colors.neutral.light};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(3)};
  }
`;

const Copyright = styled.p`
  margin: 0;
`;

const ScrollToTopButton = styled.button`
  background: ${({ theme }) => theme.colors.accent.main};
  color: ${({ theme }) => theme.colors.neutral.white};
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  transition:
    background 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accent.dark};
    transform: scale(1.1);
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.accent.light};
    outline-offset: 4px;
  }
`;
