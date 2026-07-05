import "../assets/IntroLoading.css";

const Loading = () => {
    return (
        <div className="min-h-screen bg-[#09090b] flex flex-col items-center justify-center px-4">

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8 tracking-wide">
                I'm <span className="text-green-400">Salman Shaikh</span>
            </h1>

            <div className="w-full max-w-xl rounded-xl overflow-hidden border border-gray-800 shadow-2xl bg-[#0d1117]">

                <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-gray-700">

                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>

                    <span className="ml-4 text-gray-400 text-sm font-mono">
                        Portfolio
                    </span>

                </div>

                <div className="terminal p-5 text-green-400 font-mono text-xs sm:text-sm">

                    <div className="flex items-center flex-wrap">
                        <span>salman@portfolio:~$ npm run portfolio</span>
                        <span className="cursor ml-1">|</span>
                    </div>

                    <div className="terminal-lines flex flex-col">

                        <span className="line mt-3">
                            Starting production build...
                        </span>

                        <span className="line mt-2">
                            ✔ Optimizing assets
                        </span>

                        <span className="line mt-2">
                            ✔ Loading profile
                        </span>

                        <span className="line mt-2">
                            ✔ Loading experience
                        </span>

                        <span className="line mt-2">
                            ✔ Loading projects
                        </span>

                        <span className="line mt-2">
                            ✔ Loading technologies
                        </span>

                        <span className="line mt-2 text-white">
                            ✔ Build completed successfully.
                        </span>

                        <div className="mt-3 flex items-center">
                            <span className="line">
                                Launching portfolio
                            </span>

                            <span className="cursor ml-1">
                                ...
                            </span>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Loading;