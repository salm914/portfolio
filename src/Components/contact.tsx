import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Contact = () => {
   
  return (
    <div className="w-full lg:w-2/4 xl:w-2/4 2xl:w-2/4 bg-[#0d0d0d] border border-gray-800 rounded-xl p-5 mb-4">
      <div className="grid grid-cols-1 gap-4">
      <div className="bg-[#0d0d0d] border border-gray-800 rounded-lg p-3 flex justify-start items-center">
        <div><FontAwesomeIcon icon="phone" className='text-green-500 mr-2 text-xl' /></div>
        <div>
            <h3 className="text-white font-medium"> Phone</h3>
            <h3 className="text-white font-medium">+91 7972598979</h3>
        </div>
        
      </div>
      <div className="bg-[#0d0d0d] border border-gray-800 rounded-lg p-3 flex justify-start items-center">
        <div><FontAwesomeIcon icon="envelope" className='text-green-500 mr-2 text-xl'/></div>
        <div>
            <h3 className="text-white font-medium"> Email</h3>
            <h3 className="text-white font-medium">salmanshaikh8983@gmail.com</h3>
        </div>
        
      </div>
      <div className="bg-[#0d0d0d] border border-gray-800 rounded-lg p-3 flex justify-start items-center">
        <div><FontAwesomeIcon icon="map-marker" className='text-green-500 mr-2 text-xl' /></div>
        <div>
             <h3 className="text-white font-medium">Location</h3>
            <h3 className="text-white font-medium">Pune, Maharashtra</h3>
        </div>
       
      </div>
    
  </div>
    </div>
  );
};
export default Contact;