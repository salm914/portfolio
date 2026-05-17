import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchPersonalInfo } from '../features/personal_infoSlice'



const Personal_details = () => {

     const dispatch = useDispatch<any>();
      
     useEffect(() => {
        dispatch(fetchPersonalInfo());
      }, []);
      
      const {
      name,
      designation,
      location,
      projectsCount,
      experienceYears,
      about,
      loading
      } = useSelector(
        (state: any) => state.personal
      );

      if (loading) {
        return <h1>Loading...</h1>;
      }
      
    return(
    <div className="pt-5">
        <h1 className="font-extra-large">I'm {name}</h1>
        <span className="font-extra-large text-green-500">{designation}</span>
        <br />
        <span className="font-extra-large ">Based in { location }</span>
        <br />
        <p className="mt-4 text-lg">
          { about }
        </p>
        <div className='flex gap-4 mt-6 justify-start'>
        <div className='text-center'>
            <span className="text-2xl"> {projectsCount}  </span>
            <br />
            <span className="text-2xl"> Projects </span>
        </div>
        <div className='text-center'>
            <span className="text-2xl"> {experienceYears}</span>
            <br />
            <span className="text-2xl"> Years of Experience </span>
        </div>
        </div>
    </div>
    )
}
export default Personal_details;