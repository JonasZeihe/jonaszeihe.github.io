import React from 'react';
import styled from 'styled-components';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaArrowUp,
  FaEnvelope,
  FaGithub,
} from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterWrapper>
      <FooterContent>
        <FooterGrid>
          <FooterColumn>
            <FooterTitle>Kontakt</FooterTitle>
            <ContactList>
              <ContactItem>
                <FaEnvelope />
                <ContactLink href="mailto:jonaszeihe@gmail.com">
                  jonaszeihe@gmail.com
                </ContactLink>
              </ContactItem>
              <ContactItem>
                <FaGithub />
                <ContactLink
                  href="https://github.com/jonaszeihe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/jonaszeihe
                </ContactLink>
              </ContactItem>
            </ContactList>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Social Media</FooterTitle>
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
          </FooterColumn>
        </FooterGrid>
      </FooterContent>

      <FooterBottom>
        <Copyright>
          © {new Date().getFullYear()} Jonas Zeihe. Alle Rechte vorbehalten.
        </Copyright>
        <ScrollToTopButton
          onClick={scrollToTop}
          aria-label="Nach oben scrollen"
        >
          <FaArrowUp />
        </ScrollToTopButton>
      </FooterBottom>
    </FooterWrapper>
  );
}

// **Styles**
const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.primary.dark};
  color: ${({ theme }) => theme.colors.neutral.white};
  padding: ${({ theme }) => theme.spacing(4)} ${({ theme }) => theme.spacing(4)};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(6)};
`;

const FooterContent = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.xl};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  color: ${({ theme }) => theme.colors.neutral.white};
`;

const ContactList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ContactItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  color: ${({ theme }) => theme.colors.neutral.light};
`;

const ContactLink = styled.a`
  color: ${({ theme }) => theme.colors.neutral.light};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent.main};
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const IconLink = styled.a`
  color: ${({ theme }) => theme.colors.neutral.white};
  font-size: 1.5rem;
  transition:
    color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent.main};
    transform: scale(1.1);
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.xl};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  color: ${({ theme }) => theme.colors.neutral.medium};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(2)};
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
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
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
    outline-offset: 2px;
  }
`;
