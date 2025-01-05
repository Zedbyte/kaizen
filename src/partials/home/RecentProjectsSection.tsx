import { projectData } from "@/constants/data";
import ProjectCard from "../components/home/ProjectCard";
import '/public/css/project-link.css';

export default function RecentProjectsSection() {
    return (
        <section className="space-y-10 md:space-y-3">
            {/* Recent Projects */}
            <div className="flex flex-col md:px-5">
                <div className="text-8xl font-bold flex items-center gap-5">
                    <h1 className="text-nowrap">
                        Recent
                        <span className="text-[#aa9d7d]"> Projects.</span>
                    </h1>
                    <div className="border-b border-zinc-800 w-full mt-6" />
                </div>
            </div>

            {/* Projects */}
            <div className="flex flex-wrap items-center justify-around p-4">
                {projectData.map((item) => (
                    <ProjectCard key={item.id} project={item} />
                ))}
            </div>
        </section>
    );
}