import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { technologiesThunk } from '../features/technologies_detailSlice'
import Loader from '../Components/loader'
const Technologies = () => {
  const dispatch = useDispatch<any>();

  useEffect(()=>{
    dispatch(technologiesThunk())
  },[])

  const {
    technology,loader
} = useSelector((state:any)=>state.technologies)
if (loader) {
        return <>      
          <Loader width="100%" height="200px" borderRadius="12px" />
        </>
      }


  return (
    <div className="bg-[#0d0d0d] border border-gray-800 rounded-xl p-5 mb-4">
      <div className="grid grid-cols-2 gap-4">
    {technology.map((skill:any, index:any) => (
      <div
        key={index}
        className="bg-[#0d0d0d] border border-gray-800 rounded-lg p-3 text-center"
      >
        <h3 className="text-white font-medium">{skill}</h3>
      </div>
    ))}
  </div>
    </div>
  );
};
export default Technologies;