import { useEffect, useState } from "react";
import { projectData } from "@/constants/data";
import '/public/css/project-link.css'

export default function RecentProjectsSection() {

    const [imageUrl, setImageUrl] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    setImageUrl(data.message);
                }
            })
            .catch(error => console.error('Error fetching the image:', error));
    }, []);
    

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <section className="space-y-10 md:space-y-20">
                <div className="flex flex-row md:px-5">
                    <h1 className="text-7xl md:text-9xl font-bold">Recent <br/>Projects</h1>
                    <div className="flex justify-end items-center w-full">
                    <button
                        className="dark:bg-gray-50 dark:text-gray-800 font-medium py-2 px-6 rounded hover:bg-gray-200 transition duration-300 
                        w-auto h-10 md:h-14"
                    >
                        <span className="flex items-center justify-center space-x-2">
                            <svg className="w-5 h-5 dark:text-gray-800 text-white" fill="currentColor" viewBox="0 0 16 16"> 
                                <path fillRule="evenodd" d="M15 2a1 1 0 00-1-1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2zM0 2a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm5.854 8.803a.5.5 0 11-.708-.707L9.243 6H6.475a.5.5 0 110-1h3.975a.5.5 0 01.5.5v3.975a.5.5 0 11-1 0V6.707l-4.096 4.096z" /> 
                            </svg>
                            <p className="hidden md:block">View All</p>
                        </span>
                    </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                    <div className="col-span-12 relative">
                        <figure className="flex justify-end">
                            <img 
                                src="https://www.jimtech.solutions/_next/image?url=https%3A%2F%2Fgtzjphqvqypihgwyvbrl.supabase.co%2Fstorage%2Fv1%2Frender%2Fimage%2Fpublic%2Fprojects%2Ffeaturize-thumbnail.png%3Fwidth%3D1920%26height%3D1080&w=1920&q=75"
                                alt="Project 1"
                                className="w-8/12 h-[28rem] object-cover shadow-lg"
                            />
                            <div id="container">
                                <div id="circle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        width="300px"
                                        height="300px"
                                        viewBox="0 0 300 300"
                                    >
                                        <defs>
                                            <path id="circlePath" d="M 150,150 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0" />
                                        </defs>
                                        <circle cx="150" cy="150" r="75" fill="none" stroke="none" />
                                        <g>
                                            <use href="#circlePath" fill="none" />
                                            <text fill="currentColor">
                                                <textPath href="#circlePath">
                                                    {projectData.pharmasync.link.toUpperCase()}
                                                </textPath>
                                            </text>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </figure>
                        <div>
                            <div className="absolute top-0 left-0 text-gray-300 p-2 w-4/12 space-y-10 px-5">
                                <figcaption className="text-5xl font-bold">{projectData.pharmasync.name} <span className="md:block">{projectData.pharmasync.acronym}</span></figcaption>
                                <div className="font-poppins font-semibold text-gray-600">
                                    {isExpanded ? projectData.pharmasync.description_full : projectData.pharmasync.description_truncated}
                                    
                                    <button onClick={toggleExpand} className="text-blue-500 hover:text-blue-400 transition duration-200 font-normal">
                                    {isExpanded ? "View Less" : "View More"}
                                    </button>
                                </div>
                                <button 
                                    className="bg-gray-700 text-white font-medium w-2/5 py-2 rounded hover:bg-gray-600 transition duration-300"
                                >
                                    <p>Learn More</p>
                                </button>
                            </div>
                        </div>  
                    </div>
                </div>
            </section>
        </>
    )
}