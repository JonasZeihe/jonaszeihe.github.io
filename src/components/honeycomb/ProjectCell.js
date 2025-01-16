import React from 'react';
import styled from 'styled-components';
import HexagonCell from './HexagonCell';
import { Typography, Badge } from '../../utils/sharedComponents';

const Wrapper = styled(HexagonCell)`
  width: 100%;
  cursor: pointer;
  position: relative;
  transition: transform 0.3s ease;

  /* Desktop: Hover-Effekt */
  &:hover {
    transform: scale(1.1); /* Hexagon wird größer */
  }

  .description {
    opacity: 1;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    transition: opacity 0.3s ease;
  }

  .badges {
    opacity: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(1fr));
    gap: ${({ theme }) => theme.spacing(1)};
    justify-content: center;
    align-items: center;
    padding: ${({ theme }) => theme.spacing(6)};
    position: relative;
    transition:
      opacity 0.5s ease,
      transform 0.5s ease;
    transform: scale(0.9);
    z-index: 2;

    /* Mobile: Badges ausblenden */
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      display: none;
    }
  }

  /* Hover-Effekt für Badges nur auf Desktop */
  &:hover .description {
    opacity: 0; /* Text verschwindet */
  }

  &:hover .badges {
    opacity: 1; /* Badges erscheinen */
    transform: scale(1);
  }

  /* Mobile: Keine Hover-Effekte */
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    &:hover {
      transform: none; /* Keine Vergrößerung auf Mobile */
    }
  }
`;

export default function ProjectCell({ project, onOpen, className }) {
  const handleClick = () => {
    if (onOpen) onOpen();
  };

  return (
    <Wrapper className={className} onClick={handleClick}>
      <div className="description">
        <Typography variant="body" align="center" color="primary.dark">
          {project.description}
        </Typography>
      </div>
      <div className="badges">
        {(project.badges || []).map((b) => (
          <Badge
            key={b.label}
            label={b.label}
            icon={b.icon}
            variant={b.variant}
          />
        ))}
      </div>
    </Wrapper>
  );
}
