interface ExperienceProps {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

const Experience = ({ role, company, duration, description }: ExperienceProps) => {
  return (
    <div className="bg-[#0d0d0d] border border-gray-800 rounded-xl p-5 mb-4">
      
      {/* Top Section */}
      <div className="flex justify-between items-start">
        
        <div>
          <h3 className="text-white text-lg font-semibold">{role}</h3>
          <p className="text-gray-400 text-sm mt-1">{company}</p>
        </div>

        <div className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-lg">
          {duration}
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 my-4"></div>

      {/* Description */}
      <ul className="text-gray-400 text-sm leading-relaxed"  style={{ listStyleType: 'circle' }}>
       {description.map((line, index) => (
        <li key={index}>
          {line}
        </li>
        ))}
      </ul>
    </div>
  );
};
export default Experience;