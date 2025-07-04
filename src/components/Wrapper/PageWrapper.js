import styled from 'styled-components'

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100%;
  max-width: 100vw;
  min-width: 0;
  background: none;
  color: ${({ theme }) => theme.colors.text.main || 'inherit'};
  position: relative;
  transition:
    background 0.3s cubic-bezier(0.32, 1, 0.62, 0.98),
    color 0.22s cubic-bezier(0.42, 0.12, 0.45, 1);
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-bottom: ${({ theme }) => theme.spacing(4)};
  }
`

export default PageWrapper
