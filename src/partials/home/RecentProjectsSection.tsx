import { projectData } from "@/constants/data";
import ProjectCard from "../components/home/ProjectCard";
import SectionTitle from "../components/home/SectionTitle";
// import '/public/css/project-link.css';

export default function RecentProjectsSection() {
    return (
        <section className="space-y-10 md:space-y-3">
            {/* Recent Projects */}
            <SectionTitle title="Recent Projects" subtitle="Showcasing My Solo and Collaborative Creations"/>

            {/* Projects */}
            <div className="flex flex-wrap items-center justify-around p-4">
                {projectData.map((item) => (
                    <ProjectCard key={item.id} project={item} />
                ))}
            </div>
        </section>
    );
}