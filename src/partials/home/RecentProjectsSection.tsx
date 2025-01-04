import { projectData } from "@/constants/data";
import DefaultProject from "../components/home/DefaultProject";
import ReversedProject from "../components/home/ReversedProject";
import '/public/css/project-link.css';

export default function RecentProjectsSection() {
    return (
        <section className="space-y-10 md:space-y-20">
            {/* Recent Projects */}
            <div className="flex flex-col md:px-5 mb-48">
                <div className="text-8xl font-bold flex items-center gap-5">
                    <h1 className="text-nowrap">
                        Recent Projects
                        <span className="text-[#aa9d7d]">.</span>
                    </h1>
                    <div className="border-b border-zinc-800 w-full mt-6" />
                </div>
            </div>

            {/* Projects */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-20 md:gap-y-40">
                
            </div>
        </section>
    );
}