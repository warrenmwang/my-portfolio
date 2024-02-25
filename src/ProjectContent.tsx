import VideoPlayer from './VideoPlayer';

interface Project {
  title: string;
  date: string;
  authors: string[];
  githubLink?: string;
  videoURL?: string;
  description: string;
}

type ProjectContentParams = {
  project: Project;
};

const ProjectContent: React.FC<ProjectContentParams> = ({ project }) => {
  return (
    // this was the project insides
    <div className="mt-3 text-align">
      <h3 className="text-lg leading-6 font-medium text-gray-900">{project.title}</h3>
      <div className="mt-2">
        <p className="text-md text-gray-500">{project.date}</p>
        <p className="text-md text-gray-500">{project.authors.join(', ')}</p>
        {project.githubLink && <a href={project.githubLink} target="_blank" rel="noreferrer" className="text-sm text-blue-500">GitHub Link</a>}
        {project.videoURL && <VideoPlayer youtubeUrl={project.videoURL}></VideoPlayer>}
        {/* <p className="mt-4 text-md text-gray-500">{project.description}</p> */}
        <pre className="mt-4 text-md text-gray-500 pre-wrap pre-custom">{project.description}</pre>
      </div>
    </div>
  );
};

export default ProjectContent;