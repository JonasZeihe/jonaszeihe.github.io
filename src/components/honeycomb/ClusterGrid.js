import styled from 'styled-components';

/* Helper-Funktionen für die Positionierung */
const getTitlePosition = (position) => {
  switch (position) {
    case 'left':
      return 'start';
    case 'right':
      return 'end';
    default:
      return 'center';
  }
};

const getButtonPosition = (position) => {
  switch (position) {
    case 'left':
      return 'start';
    case 'right':
      return 'end';
    default:
      return 'center';
  }
};

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
    max-width: ${({ theme }) =>
      theme.spacing(60)}; /* Maximalbreite der ProjectCell */
    min-width: ${({ theme }) =>
      theme.spacing(30)}; /* Minimalbreite der ProjectCell */
  }

  .button {
    grid-area: button;
    justify-self: ${({ buttonPosition }) => getButtonPosition(buttonPosition)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-areas:
      'title'
      'main'
      'button';
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;

    gap: ${({ theme }) => theme.spacing(2)};

    .main {
      max-width: ${({ theme }) =>
        theme.spacing(50)}; /* Reduzierte Maximalbreite für Mobile */
      min-width: ${({ theme }) => theme.spacing(20)};
    }
  }
`;

export default ClusterGrid;
