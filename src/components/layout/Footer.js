import React from 'react'
import styled from 'styled-components'
import {
  FaLinkedin,
  FaXing,
  FaArrowUp,
  FaEnvelope,
  FaGithub,
} from 'react-icons/fa'

export default function Footer() {
  const scrollToTop = () => {
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
  }

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
              <IconLink
                href="https://de.linkedin.com/in/jonas-zeihe"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </IconLink>
              <IconLink
                href="https://www.xing.com/profile/Jonas_Zeihe3"
                aria-label="Xing"
              >
                <FaXing />
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
  )
}

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.gradients.primaryDark};
  color: ${({ theme }) => theme.colors.neutral.ultraLight};
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(4)};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
`

const FooterContent = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.xl};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
`

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing(4)};
  width: 100%;
`

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
`

const FooterTitle = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSize.h4};
  color: ${({ theme }) => theme.colors.neutral.ultraLight};
  margin: 0;
`

const ContactList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`

const ContactItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  color: ${({ theme }) => theme.colors.neutral.ultraLight};
`

const ContactLink = styled.a`
  color: ${({ theme }) => theme.colors.neutral.lightest};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent.main};
  }
`

const SocialIcons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
`

const IconLink = styled.a`
  color: ${({ theme }) => theme.colors.neutral.ultraLight};
  font-size: 1.5rem;
  transition:
    color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent.main};
    transform: scale(1.1);
  }
`

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.xl};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  color: ${({ theme }) => theme.colors.neutral.ultraLight};
  gap: ${({ theme }) => theme.spacing(2)};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`

const Copyright = styled.p`
  margin: 0;
`

const ScrollToTopButton = styled.button`
  background: ${({ theme }) => theme.colors.accent.main};
  color: ${({ theme }) => theme.colors.neutral.ultraLight};
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
`
