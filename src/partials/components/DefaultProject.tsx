import { useState } from "react";

interface ProjectProps {
    data: {
        src: string;
        link: string;
        name: string;
        acronym: string;
        description_full: string;
        description_truncated: string;
    };
}


export default function Project({ data }: ProjectProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="col-span-12 relative flex justify-end ">
            <figure className="group relative w-8/12">
                <div className="overflow-hidden shadow-lg">
                    {/* Image with Zoom Effect */}
                    <img
                        src={data.src}
                        alt={`${data.name} Project`}
                        className="h-[28rem] object-cover shadow-lg transition-transform ease-in duration-500 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 group-hover:opacity-50"></div>

                    {/* Bottom-Left Sliding Container */}
                    <div className="absolute bottom-4 left-4 p-2 bg-black text-white rounded-lg opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                        <a
                        href={data.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                        >
                        <span className="text-sm">View Project</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                        </svg>
                        </a>
                    </div>
                </div>

                {/* Rotating Link */}
                <div id="container" className="-top-[45%] -right-[25%]">
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
                                <text fill="currentColor" onClick={() => window.open(data.link, "_blank")}>
                                    <textPath href="#circlePath">
                                        {data.link.toUpperCase()}
                                    </textPath>
                                </text>
                            </g>
                        </svg>
                    </div>
                </div>
            </figure>
            <div>
                <div className="absolute top-0 left-0 text-gray-300 p-2 w-4/12 space-y-10 px-5">
                    <figcaption className="text-5xl font-bold">{data.name} <span className="md:block">{data.acronym}</span></figcaption>
                    <div className="font-poppins font-semibold text-gray-600">
                        {isExpanded ? data.description_full : data.description_truncated}
                        
                        <button onClick={toggleExpand} className="text-blue-500 hover:text-blue-400 transition duration-200 font-normal">
                        {isExpanded ? "View Less" : "View More"}
                        </button>
                    </div>
                    <button className="relative overflow-hidden border-2 border-gray-700 text-white font-medium w-2/5 py-2 rounded transition duration-300 group">
                        <p className="relative z-10">Learn More</p>
                        <span className="absolute inset-0 bg-gray-700 transition-all duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
                    </button>
                </div>
            </div>  
        </div>
    );
}