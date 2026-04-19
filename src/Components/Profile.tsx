import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const downloadCV = () => {
  const link = document.createElement("a");
    link.href = "./Resume_(Salman_Shaikh).pdf";
    link.download = "My_Resume.pdf";
    link.click();
}
const Profile = () => {
   return (
  <div className="flex items-center ">
    
    <div className="bg-[#0d0d0d] p-6 rounded-2xl w-80 text-center shadow-xl border border-gray-800">

      {/* Profile Image */}
      <div className="rounded-2xl overflow-hidden border border-gray-700">
        <img
          src="./profile.jpeg"
          alt="profile"
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Available Badge */}
      <div className="mt-4 flex justify-center">
        <div className="flex items-center gap-2 border border-gray-700 px-4 py-2 rounded-full text-gray-300">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span> <FontAwesomeIcon icon="user-check" className='text-green-500 mr-2 text-xl' /> Available for work</span>
        </div>
      </div>

      {/* Name */}
      <h2 className="text-2xl font-bold text-white mt-4">
        Salman Shaikh
      </h2>


      {/* Buttons */}
      <div className="flex gap-3 mt-6">
        <button onClick={() => downloadCV()} className="flex-1 bg-gray-800 text-gray-300 py-2 rounded-lg hover:bg-gray-700">
          <FontAwesomeIcon icon="download" className='text-green-500 mr-2 text-xl' />  Download CV
        </button>

        {/* <button className="flex-1 bg-green-500 text-black py-2 rounded-lg font-semibold hover:bg-green-400">
            Contact Me
        </button> */}
      </div>

    </div>

  </div>
);
}
export default Profile;