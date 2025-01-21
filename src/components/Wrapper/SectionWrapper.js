import styled from 'styled-components'
import WrapperBase from './WrapperBase'

const SectionWrapper = styled(WrapperBase)`
  /* Grundlayout */
  padding: ${({ theme }) => theme.spacing(3)};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  background: ${({ theme, backgroundColor }) =>
    backgroundColor
      ? theme.colors[backgroundColor.split('.')[0]]?.[
          backgroundColor.split('.')[1]
        ]
      : theme.colors.neutral.ultraLight};

  /* Responsive Einstellungen */
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing(2)};
    margin: ${({ theme }) => theme.spacing(2)} auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: auto;
    margin: ${({ theme }) => theme.spacing(2)} auto;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }

  /* Maximale Breite für große Bildschirme */
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 1200px;
  }
`

export default SectionWrapper
