const Technologies = () => {
    const skills = [
  "React.js", "Vue.js",
  "JavaScript", "TypeScript",
  "Redux", "Pinia",
  "Vuex", "VeeValidate",
  "HTML", "CSS",
  "Tailwind CSS", "Bootstrap",
  "jQuery", "Ajax",
  "Git", "MySQL",
  "Claude Sonnet AI"
];
  return (
    <div className="bg-[#0d0d0d] border border-gray-800 rounded-xl p-5 mb-4">
      <div className="grid grid-cols-2 gap-4">
    {skills.map((skill, index) => (
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