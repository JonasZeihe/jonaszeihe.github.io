import PropTypes from 'prop-types';
import ClusterGrid from './ClusterGrid';
import HexagonCell from './HexagonCell';
import ProjectCell from './ProjectCell';
import { Typography } from '../../utils/sharedComponents';
import HoneycombIconButton from '../common/HoneycombIconButton';

export default function ProjectCluster({ project, variant, onOpen }) {
  return (
    <ClusterGrid variant={variant}>
      {/* Titelzelle */}
      <HexagonCell color="neutral.white" className="title">
        <Typography variant="h1" align="center" color="primary.main">
          {project.name}
        </Typography>
      </HexagonCell>

      {/* Hauptprojektzelle */}
      <ProjectCell project={project} className="main" onOpen={onOpen} />

      {/* GitHub-Buttonzelle */}
      <HoneycombIconButton
        className="button"
        icon="FaGithub"
        size="small"
        onClick={() => {
          window.open(project.githubLink, '_blank');
        }}
      />
    </ClusterGrid>
  );
}

ProjectCluster.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    badges: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        icon: PropTypes.string,
        variant: PropTypes.string,
      })
    ).isRequired,
    githubLink: PropTypes.string,
  }).isRequired,
  variant: PropTypes.oneOf(['variant1', 'variant2', 'variant3']).isRequired,
};
