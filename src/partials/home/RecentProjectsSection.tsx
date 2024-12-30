import { projectData } from "@/constants/data";
import DefaultProject from "../components/home/DefaultProject";
import ReversedProject from "../components/home/ReversedProject";
import '/public/css/project-link.css';

interface RecentProjectsProps {
    projectRefs: React.RefObject<HTMLDivElement>[];
}

export default function RecentProjectsSection({ projectRefs }: RecentProjectsProps) {
    return (
        <section className="space-y-10 md:space-y-20">
            {/* Recent Projects */}
            <div className="flex flex-col md:px-5 mb-48">
                <div className="flex">
                    <h1 className="text-7xl md:text-9xl font-bold">Recent <br />Projects</h1>
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
                <div className="border-b border-gray-900 w-full mt-6" />
            </div>

            {/* Projects */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-20 md:gap-y-40">
                <DefaultProject ref={projectRefs[0]} data={projectData.pharmasync} />
                <ReversedProject ref={projectRefs[1]} data={projectData.draco} />
                <DefaultProject ref={projectRefs[2]} data={projectData.nexus} />
            </div>
        </section>
    );
}