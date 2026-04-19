const Personal_details = () => {
    return(
    <div className="pt-5">
        <h1 className="font-extra-large">I'm Salman Shaikh</h1>
        <span className="font-extra-large text-green-500">Software Developer</span>
        <br />
        <span className="font-extra-large ">Based in Pune, Maharashtra</span>
        <br />
        <p className="mt-4 text-lg">
            I build modern web experiences that combine performance, scalability, and clean design. With hands-on experience in React.js, Vue.js, and Tailwind CSS, I focus on crafting intuitive user interfaces and seamless interactions. My goal is to turn ideas into efficient, user-friendly applications that are both visually appealing and technically robust
        </p>
        <div className='flex gap-4 mt-6 justify-start'>
        <div className='text-center'>
            <span className="text-2xl"> 15+ </span>
            <br />
            <span className="text-2xl"> Projects </span>
        </div>
        <div className='text-center'>
            <span className="text-2xl"> 4.6 </span>
            <br />
            <span className="text-2xl"> Years of Experience </span>
        </div>
        </div>
    </div>
    )
}
export default Personal_details;