import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { experience } from '../features/experience_Slice'
interface ExperienceProps {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

const Experience = () => {
const dispatch = useDispatch<any>()
useEffect(()=>{
  dispatch(experience())
  console.log('called')
},[]);

  const {
    experince_details,
    loader,
    error,} = useSelector((state:any) => state.experiencedata)

    console.log(experince_details)
  return (
    <>
    {experince_details.map((item: any, index: number) => ( 
      <div  key={index} className="bg-[#0d0d0d] border border-gray-800 rounded-xl p-5 mb-4">
      
      {/* Top Section */}
      <div className="flex justify-between items-start">
        
        <div>
          <h3 className="text-white text-lg font-semibold">{item.designation}</h3>
          <p className="text-gray-400 text-sm mt-1">{item.company}</p>
        </div>

        <div className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-lg">
          {item.startDate } - {item. endDate}
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 my-4"></div>

      {/* Description */}
      <ul className="text-gray-400 text-sm leading-relaxed"  style={{ listStyleType: 'circle' }}>
       {item.responsibilities.map((line:any, index:number) => (
        <li key={index}>
          {line}
        </li>
        ))}
      </ul>
    </div>
    ))}
    </>
  );

  
};
export default Experience;