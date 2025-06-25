import styled from 'styled-components'

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.gradients.pageBackground};
  color: ${({ theme }) => theme.colors.neutral.black};
  transition: background 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-bottom: ${({ theme }) => theme.spacing(4)};
  }
`

export default PageWrapper
