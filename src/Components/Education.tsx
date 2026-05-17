import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react'
import { fetchEducation } from '../features/education_detailSlice'

//fetchEducation
const Education = () => {

  const  dispatch = useDispatch<any>();
  useEffect(()=>{
    dispatch(fetchEducation())
  },[])

  const {
    education,
} = useSelector((state:any)=> state.education)



  return (
    <>
    {education.map((item:any,  index:number)=>(

    <div key={index} className="bg-[#0d0d0d] border border-gray-800 rounded-xl p-5 mb-4">
      
      {/* Top Section */}
      <div className="flex justify-between items-start">
        
        <div>
          <h3 className="text-white text-lg font-semibold">{item.degree}</h3>
          <p className="text-gray-400 text-sm mt-1">{item.university}</p>
        </div>

        <div className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-lg">
          {item.startYear} - {item.endYear}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 my-4"></div>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed">
        {item.details}
      </p>
    </div>
    ))}
    </>
  );

};
export default Education;