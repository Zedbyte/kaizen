import { PinContainer } from "@/components/ui/3d-pin";
import bentoBg from "/assets/projects/bento-bg.png";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

export type ProjectCardProps = {
    project: {
        id: number;
        name: string;
        subtitle: string;
        description_truncated: string;
        src: string;
        link: string;
        icon: { id: number; src: string; name: string; }[];
    };
};

export default function ProjectCard({ project  } : ProjectCardProps) {
        return (
            <div key={project.id} className="flex items-center justify-center h-[32.5rem] w-[80vw] sm:w-96">
            <PinContainer title={project.name} href={project.link} className="space-y-10">
                <figure className="relative flex items-center justify-center w-[20vw] h-[25vh] 
                overflow-hidden rounded-lg">
                    <div className="relative w-full h-full overflow-hidden rounded-lg bg-zinc-200 dark:bg-zinc-500">
                        <img src={bentoBg} alt="Card Background Image" />
                    </div>
                    <img src={project.src} alt={project.name} 
                    className="z-10 absolute -bottom-20"/>
                </figure>

                <figcaption>
                    <h1 className="font-bold text-lg line-clamp-1 text-secondary-light dark:text-secondary-dark">
                        {project.name} - {project.subtitle}
                    </h1>

                    <p className="text-md font-light line-clamp-2 text-secondary-light dark:text-secondary-dark">
                        {project.description_truncated}
                    </p>
                </figcaption>

                <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                        {/* {project.icon.map((icon, index) => (
                            <div 
                                key={index}
                                className="border border-white/[.2] rounded-full bg-gradient-to-r from-[#1e1e1e] to-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                style={{
                                transform: `translateX(-${5 * index + 2}px)`,
                                }}>
                                <img src={icon} alt={project.name} className="p-2"/>
                            </div>
                        ))}  */}
                        <AnimatedTooltip items={project.icon } />
                    </div>

                    <div className="flex justify-center items-center space-x-2">
                        <p className="flex lg:text-base md:text-xs text-sm font-light text-secondary-light dark:text-secondary-dark">
                            Check Live Site
                        </p>

                        <svg
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path
                            fillRule="evenodd"
                            d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                            />
                        </svg>
                    </div>
                </div>
            </PinContainer>
        </div>
        );
};