// ClusterGrid.js
import styled from 'styled-components';

function getTitlePosition(pos) {
  if (pos === 'left') return 'start';
  if (pos === 'right') return 'end';
  return 'center';
}
function getButtonPosition(pos) {
  if (pos === 'left') return 'start';
  if (pos === 'right') return 'end';
  return 'center';
}

const ClusterGrid = styled.div`
  display: grid;
  grid-template-areas:
    'title'
    'main'
    'button';
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  gap: ${({ theme }) => theme.spacing(3)};
  justify-items: center;
  position: relative;

  .title {
    grid-area: title;
    justify-self: ${({ titlePosition }) => getTitlePosition(titlePosition)};
  }

  .main {
    grid-area: main;
    width: 100%;
    max-width: ${({ theme }) => theme.spacing(60)};
    min-width: ${({ theme }) => theme.spacing(30)};
  }

  .button {
    grid-area: button;
    justify-self: ${({ buttonPosition }) => getButtonPosition(buttonPosition)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.spacing(2)};
    .main {
      max-width: ${({ theme }) => theme.spacing(50)};
      min-width: ${({ theme }) => theme.spacing(20)};
    }
  }
`;

export default ClusterGrid;
