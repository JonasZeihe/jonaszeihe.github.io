import styled from 'styled-components'

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100%;
  max-width: 100vw;
  min-width: 0;
  position: relative;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-bottom: ${({ theme }) => theme.spacing(4)};
  }
`

export default PageWrapper
