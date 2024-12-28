import { userData } from "@/constants/data";
import profileAvatar from "@/assets/profile-avatar.png";

export default function HeroSection() {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-0
        md:space-x-8 md:space-y-0 md:relative">
            {/* Text Content */}
            <div className="md:w-1/2 space-y-8">
            
                <div className="space-y-12">
                    {/* Header Section */}
                    <header className="space-y-4 md:text-start">
                        <h1 className="text-4xl font-base">
                            <span className="font-bold">{userData.header.title_bold}</span> {userData.header.title}
                        </h1>
                        <h2 className="text-2xl font-medium">
                            <span className="font-bold">{userData.header.subtitle_bold}</span> {userData.header.subtitle}
                        </h2>
                    </header>

                    {/* Paragraph Section */}
                    <p className="text-lg  md:text-start">
                        A {userData.age}-year-old <span className="font-bold">{userData.header.role}</span> based in {userData.province}, {userData.country}.
                    </p>
                </div>

                {/* Button Section */}
                <div className="flex w-full space-x-4">
                    <button
                        className="bg-white text-black border border-gray-300 font-medium w-3/5 py-2 rounded hover:bg-gray-300 transition duration-300"
                    >
                        <span className="flex items-center justify-center space-x-2">
                            <svg className="w-5 h-5 text-gray-800 dark:text-[#0f0f0f]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" clipRule="evenodd"/>
                            </svg>
                            <p>Schedule a <span className="font-bold">Call</span></p>
                        </span>
                    </button>
                    <button
                        className="bg-gray-700 text-white font-medium w-2/5 py-2 rounded hover:bg-gray-600 transition duration-300"
                    >
                        <span className="flex items-center justify-center space-x-2">
                            <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Zm2 0V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Zm2-2a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3Zm0 3a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3Zm-6 4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-6Zm8 1v1h-2v-1h2Zm0 3h-2v1h2v-1Zm-4-3v1H9v-1h2Zm0 3H9v1h2v-1Z" clipRule="evenodd"/>
                            </svg>
                            <p>View <span className="font-bold">Resume</span></p>
                        </span>
                    </button>
                </div>
            </div>

            {/* Image Content */}
            <div className="md:w-1/2 md:absolute lg:-top-[50%] md:right-0">
                <div className="flex flex-col space-y-3">
                    <figure className="flex items-end justify-center md:justify-end w-full">
                        <img 
                            src={profileAvatar}
                            alt="Kaizen Profile Picture" 
                            className="w-6/12 md:w-11/12 h-auto rounded-2xl border border-gray-900 shadow-lg md:border-0 md:shadow-none"
                        />
                    </figure>
                    <div className="text-end hidden lg:block">
                        <span className="flex items-center justify-end space-x-2">
                            <svg fill="currentColor" viewBox="0 0 16 16" className="w-3 h-3">
                                <path fillRule="evenodd" d="M4.854 1.146a.5.5 0 00-.708 0l-4 4a.5.5 0 10.708.708L4 2.707V12.5A2.5 2.5 0 006.5 15h8a.5.5 0 000-1h-8A1.5 1.5 0 015 12.5V2.707l3.146 3.147a.5.5 0 10.708-.708l-4-4z"/>
                            </svg>
                            <p className="font-mono text-sm">
                            I am also interested in{' '}
                            {Object.values(userData.header.image_caption)
                                .map((field, index, arr) => (
                                <span key={field} className="font-mono font-bold">
                                    {field}
                                    {index < arr.length - 2 ? ', ' : index === arr.length - 2 ? ', and ' : ''}
                                </span>
                                ))}
                            .
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}