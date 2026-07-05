import react from 'react'
import  '../assets/IntroLoading.css'
const Loading = () => {

    return(
        <div>
        <div className='flex justify-center items-center h-screen'>
            <div className="bg-[#0d0d0d] p-6 rounded-2xl w-80  shadow-xl border border-gray-800">

                <div>
                    <span>&gt; npm run portfolio</span>
                    <span className="cursor">|</span>
                </div>
                <div className="terminal">
                    <span className="mt-2 line">Starting Production Server...</span>
                    <span className="mt-2 line">&gt; Loading Profile</span>
                    <span className="mt-2 line">&gt; Loading Experience</span>
                    <span className="mt-2 line">&gt; Loading Projects</span>
                    <span className="mt-2 line">&gt; Loading Contact</span>
                </div>
                
            </div>
        </div>
        </div> 
    );

}
export default Loading