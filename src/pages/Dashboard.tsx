import Personal_details from '../Components/Personal_details';
import Profile from '../Components/Profile';
import Experience from '../Components/Experience';
import Education from '../Components/Education';
import Contact from '../Components/contact';
import Technologies from '../Components/Technologies';
import Projects from '../Components/Projects';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { experienceData, educationData, projectsData } from '../data/portfolio-data';

const Dashboard = () => {

    return (
        <div className="md:flex lg:flex xl:flex 2xl:flex pt-4">
        <div className="md:sticky lg:sticky xl:sticky 2xl:sticky top-0 text-center md:h-screen">
            <Profile />
        </div>
        <div className="flex-1 overflow-y-auto p-2">
            <Personal_details />

            <h2 className="mt-4 text-white text-2xl font-bold mb-3 mt-10 flex items-center gap-2">
                <FontAwesomeIcon icon="briefcase" className='text-green-500 mr-2 text-xl' /> Experience
            </h2>
            {experienceData.map((item, index) => (
                <Experience key={index} {...item} />
            ))}

            <h2 className="mt-4 text-white text-2xl font-bold mb-3 flex items-center gap-2">
                <FontAwesomeIcon icon="folder" className='text-green-500 mr-2 text-xl' /> Projects
            </h2>
            {projectsData.map((item, index) => (
                <Projects key={index} {...item} />
            )) }

             <h2 className="mt-4 text-white text-2xl font-bold mb-3 flex items-center gap-2">
                <FontAwesomeIcon icon="graduation-cap" className='text-green-500 mr-2 text-xl' /> Education
            </h2>
            {educationData.map((item, index) => (
                <Education key={index} {...item} />
            )) }

            <h2 className="mt-4 text-white text-2xl font-bold mb-3 flex items-center gap-2">
                <FontAwesomeIcon icon="cogs" className='text-green-500 mr-2 text-xl' /> Technologies
            </h2>
            <Technologies/>

             <h2 className="mt-4 text-white text-2xl font-bold mb-3 flex items-center gap-2">
                <FontAwesomeIcon icon="address-book" className='text-green-500 mr-2 text-xl' /> Contacts
            </h2>
            <Contact /> 
        </div>

        </div>
    );
    
}
export default Dashboard;