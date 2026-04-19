interface EducationProps {
  degree: string;
  college: string;
  duration: string;
  description: string;
}

const Education = ({ degree, college, duration, description }: EducationProps ) => {
  return (
    <div className="bg-[#0d0d0d] border border-gray-800 rounded-xl p-5 mb-4">
      
      {/* Top Section */}
      <div className="flex justify-between items-start">
        
        <div>
          <h3 className="text-white text-lg font-semibold">{degree}</h3>
          <p className="text-gray-400 text-sm mt-1">{college}</p>
        </div>

        <div className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-lg">
          {duration}
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 my-4"></div>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );

};
export default Education;