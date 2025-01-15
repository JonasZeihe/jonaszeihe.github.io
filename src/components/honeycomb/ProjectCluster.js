// ProjectCluster.js
import PropTypes from 'prop-types';
import ClusterGrid from './ClusterGrid';
import HexagonCell from './HexagonCell';
import ProjectCell from './ProjectCell';
import HoneycombIconButton from '../common/HoneycombIconButton';
import { Typography } from '../../utils/sharedComponents';

export default function ProjectCluster({ project, variant, onOpen }) {
  const mapVariant = (v) => {
    if (v === 'variant1') return { titlePos: 'left', buttonPos: 'right' };
    if (v === 'variant2') return { titlePos: 'center', buttonPos: 'center' };
    return { titlePos: 'right', buttonPos: 'left' };
  };

  const { titlePos, buttonPos } = mapVariant(variant);

  return (
    <ClusterGrid titlePosition={titlePos} buttonPosition={buttonPos}>
      <HexagonCell color="neutral.white" className="title">
        <Typography variant="h3" align="center" color="primary.main">
          {project.name}
        </Typography>
      </HexagonCell>
      <ProjectCell project={project} className="main" onOpen={onOpen} />
      <div className="button">
        <HoneycombIconButton
          icon="FaGithub"
          onClick={() => window.open(project.githubLink, '_blank')}
        />
      </div>
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
