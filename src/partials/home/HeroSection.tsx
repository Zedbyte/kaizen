import { userData } from "@/constants/data";
import { Reveal } from "@/motion-components/Reveal";
import profileAvatar from "@/assets/profile-avatar-v2.png";

export default function HeroSection() {
    return (
        <>
            <section className="flex items-center justify-center h-[30rem]">
                {/* Full Name */}
                    <h1 className="absolute inset-x-0 flex justify-center text-[10rem] font-bold">
                        <Reveal>
                            <span>{userData.full_name}</span>                
                        </Reveal>
                    </h1>

                {/* Avatar */}
                <figure className="flex items-center justify-center h-full w-full z-50">
                    <img 
                        src={profileAvatar}
                        alt="Kaizen Profile Picture"
                        className="h-full w-auto rounded-2xl object-contain"
                    />
                </figure>
            </section>

            <section className="flex flex-col items-center justify-center h-full space-y-14 max-w-4xl">
                <div className="space-y-8 flex flex-col items-center">
                    {/* Job Role */}
                    <Reveal>
                        <h1 className="text-6xl text-center font-bold">
                            <span className=" text-[#AA9D7D]">
                                {userData.header.subtitle_bold}
                            </span>
                            &nbsp;
                            <span className="break-word">
                                {userData.header.subtitle}
                            </span>
                        </h1>
                    </Reveal>

                    <Reveal>
                        <h2 className="text-2xl text-center">
                        A {userData.age}-year-old&nbsp;
                        <span className="font-bold text-[#AA9D7D]">{userData.header.role}</span>
                        &nbsp;<br />based in {userData.province}, {userData.country}.</h2>
                    </Reveal>
                </div>


                {/* Button Section */}
                <div className="flex w-8/12 space-x-9">
                    <a href="https://calendly.com/kaizxn/consultation" target="_blank" rel="noopener noreferrer"
                    className="bg-white text-black border border-gray-300 font-medium w-full py-2 rounded hover:bg-gray-300 transition duration-300">
                        <span className="flex items-center justify-center space-x-2">
                            <svg className="w-5 h-5 text-gray-800 dark:text-[#0f0f0f]" aria-hidden="true" xmlns="http:www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" clipRule="evenodd"/>
                            </svg>
                            <p>Schedule a <span className="font-bold">Call</span></p>
                        </span>
                    </a>
                    <button
                        className="bg-gray-700 text-white font-medium w-full py-2 rounded hover:bg-gray-600 transition duration-300"
                    >
                        <span className="flex items-center justify-center space-x-2">
                            <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http:www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Zm2 0V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Zm2-2a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3Zm0 3a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3Zm-6 4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-6Zm8 1v1h-2v-1h2Zm0 3h-2v1h2v-1Zm-4-3v1H9v-1h2Zm0 3H9v1h2v-1Z" clipRule="evenodd"/>
                            </svg>
                            <p>View <span className="font-bold">Resume</span></p>
                        </span>
                    </button>
                </div>
            </section>
        </>
    )
}