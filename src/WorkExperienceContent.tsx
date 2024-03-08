import './misc.css'
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface WorkExperienceContent {
  jobRole: string;
  company: string;
  startDate: string;
  endDate: string;
  location: string;
  companyLink?: string;
  description: string;
}

type WorkExperienceContentParams = {
  work: WorkExperienceContent;
};

const WorkExperienceContent: React.FC<WorkExperienceContentParams> = ({ work }) => {
  return (
    // this was the project insides
    <div className="mt-3 text-align">
      <h3 className="text-lg leading-6 font-medium text-gray-900">{work.company}</h3>
      <div className="mt-2">
        <p className="text-md text-gray-500">Role: {work.jobRole}</p>
        <p className="text-md text-gray-500">Duration: {work.startDate} - {work.endDate}</p>
        <p className="text-md text-gray-500">Location: {work.location}</p>
        {work.companyLink && <a href={work.companyLink} target="_blank" rel="noreferrer" className="text-sm text-blue-500">Company Website</a>}
        {/* <pre className="mt-4 text-md text-gray-500 pre-wrap pre-custom">{work.description}</pre> */}
        <Markdown className='text-md text-gray-500' remarkPlugins={[remarkGfm]}>{work.description}</Markdown>
      </div>
    </div>
  );
};

export default WorkExperienceContent;