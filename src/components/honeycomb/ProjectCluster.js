import ClusterGrid from './ClusterGrid';
import HexagonCell from './HexagonCell';
import ProjectCell from './ProjectCell';
import HoneycombIconButton from '../common/HoneycombIconButton';
import { Typography } from '../../utils/sharedComponents';

export default function ProjectCluster({ project, onOpen }) {
  return (
    <ClusterGrid>
      <HexagonCell color="neutral.white" className="title">
        <Typography variant="h3" align="center" color="primary.main">
          {project.name}
        </Typography>
      </HexagonCell>
      <div className="main">
        <ProjectCell project={project} onOpen={onOpen} />
      </div>
      <div className="button">
        <HoneycombIconButton
          icon="FaGithub"
          onClick={() => window.open(project.githubLink, '_blank')}
        />
      </div>
    </ClusterGrid>
  );
}
