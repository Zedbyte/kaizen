import { Link } from "react-router-dom";

export default function BentoWrapper({ title, svg, children, additionalClass, viewAll=false} : 
    { title: string, svg: React.ReactNode, children: React.ReactNode, additionalClass?: string , viewAll?: boolean }) {
    return (
        <div className={`${additionalClass}
        col-span-12 bg-neutral-950 p-4 rounded-md border border-zinc-700 
        group/bento`}>
            { viewAll 
            ? 
            <div className="flex justify-between">
                <span className="flex items-center gap-2 text-zinc-400 group-hover/bento:translate-x-2 transition duration-200">
                    { svg }
                    <h1 className="font-bold">{ title }</h1>
                </span>

                <Link to="/about" className="text-xs flex items-center">
                    <span className="flex items-center gap-2 text-zinc-400 hover:underline">
                        <h1 className="text-white">View All</h1>
                        <svg
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 320 512"
                        >
                            <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                        </svg>
                    </span>
                </Link>
            </div> 
            : 
                <span className="flex items-center gap-2 text-zinc-400 group-hover/bento:translate-x-2 transition-transform duration-200">
                    { svg }
                    <h1 className="font-bold">{ title }</h1>
                </span>
            }

            { children }
        </div>
    )
}