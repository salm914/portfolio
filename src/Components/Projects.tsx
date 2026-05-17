import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import { projects_details } from '../features/projects_detailSlice'


const Projects = () => {
const dispatch = useDispatch<any>()
  useEffect(()=>{
    dispatch(projects_details())
  },[])

  const {
    projects
} = useSelector((state:any)=>state.projects)

  return (
    <>
    {projects.map((item:any , index:number )=>(
    <div key={index} className="bg-[#0d0d0d] border border-gray-800 rounded-xl p-5 mb-4">
      
      {/* Top Section */}
      <div className="flex justify-between items-start">
        
        <div>
          <h3 className="text-white text-lg font-semibold">{item.title}</h3>
          <p className="text-gray-400 text-sm mt-1">{item.technology}</p>
        </div>

        {/* <div className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-lg">
        </div> */}

      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 my-4"></div>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed">
        {item.description}
      </p>
    </div>
))}
</>
  );

};
export default Projects;