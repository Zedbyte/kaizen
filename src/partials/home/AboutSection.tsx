import Timeline from "@/components/custom/Timeline"
import { experienceData } from "@/constants/data"
import { Link } from "react-router-dom"
import bentoAsset1 from "/public/assets/bento/b4.svg"
import bentoAsset2 from "/public/assets/bento/b5.svg"
import bentoGrid from "/public/assets/bento/grid.svg"


export default function AboutSection() {
    return (
        <section className="space-y-10 md:space-y-10">
            {/* About */}
            <div className="flex flex-col md:px-5">
                <div className="text-8xl font-bold flex items-center gap-5">
                    <h1 className="text-nowrap">
                        About
                        <span className="text-[#aa9d7d]">.</span>
                    </h1>
                    <div className="border-b border-zinc-800 w-full mt-6" />
                </div>
            </div>

            {/* Content */}
            <article className="grid grid-cols-1 md:grid-cols-12 px-5 gap-5">
                {/* Introduction */}
                <div className="col-span-12 md:col-span-7 space-y-5 
                bg-neutral-950 p-4 rounded-md border border-zinc-700 
                group/bento relative overflow-hidden">
                    <span className="flex items-center gap-2 text-zinc-400 group-hover/bento:translate-x-2 transition-transform duration-200">
                        <svg
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M5 2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2h3.5A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5H14a.5.5 0 0 1-1 0H3a.5.5 0 0 1-1 0h-.5A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2zm1 0h4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1M1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H3V3zM15 12.5v-9a.5.5 0 0 0-.5-.5H13v10h1.5a.5.5 0 0 0 .5-.5m-3 .5V3H4v10z" />
                        </svg>
                        <h1 className="font-bold">Introduction</h1>
                    </span>

                    {/* Bento Grid */}
                    <div className="absolute top-0 left-0 h-full opacity-30 pointer-events-none">
                        <img src={bentoGrid} alt="Bento Background Image" className="object-cover object-center h-full w-full"/>
                    </div>
                    {/* Bento Asset */}
                    <div className="absolute bottom-0 right-0 h-2/6 opacity-80 pointer-events-none">
                        <img src={bentoAsset1} alt="Bento Background Image" className="object-cover object-center h-full w-full"/>
                    </div>

                    <h1 className="dark:text-gray-100 text-md font-semibold tracking-wide leading-relaxed">
                        I am a full-stack engineer specializing in developing solutions with JavaScript, Python, 
                        PHP, and frameworks like .NET, Django, and React.
                    </h1>

                    <p className="dark:text-gray-100 text-sm font-light tracking-wider leading-relaxed">
                        I focus on developing user-friendly, functional, and most importantly, profitable digital products inside the E-Commerce, 
                        SaaS, Workflows, and Web3 industry. I've helped startups and MSMEs grow and streamline their processes through software solutions. 
                        I've also built a community of over 200,000 developers sharing knowledge and mentorship.
                        <br/>
                        <br/>
                        I've helped startups and MSMEs grow and streamline their processes through software solutions. 
                        I've also built a community of over 200,000 developers sharing knowledge and mentorship.
                    </p>
                </div>

                {/* Experience */}
                <div className="col-span-12 md:col-span-5 row-span-2 bg-neutral-950 p-4 rounded-md border border-zinc-700 group/bento">
                    <div className="flex justify-between">
                        <span className="flex items-center gap-2 text-zinc-400 group-hover/bento:translate-x-2 transition duration-200">
                            <svg
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                viewBox="0 0 640 512"
                            >
                                <path d="M64 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v256h-64V96H128v256H64V96zM0 403.2C0 392.6 8.6 384 19.2 384h601.6c10.6 0 19.2 8.6 19.2 19.2 0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zm112-34 48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" />
                            </svg>
                            <h1 className="font-bold">Experience</h1>
                        </span>

                        <Link to="/about" className="text-xs">
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
                    <Timeline data={experienceData} />
                </div>

                {/* Services */}
                <div className="col-span-12 md:col-span-7 bg-neutral-950 p-4 rounded-md border border-zinc-700 
                group/bento relative overflow-hidden">
                    <span className="flex items-center gap-2 text-zinc-400 group-hover/bento:translate-x-2 transition-transform duration-200">
                        <svg
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 0 1 5.25 7H4v4a1 1 0 0 0 1 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0 1 14.25 16h-3.5A1.75 1.75 0 0 1 9 14.25v-.75H5A2.5 2.5 0 0 1 2.5 11V7h-.75A1.75 1.75 0 0 1 0 5.25zm1.75-.25a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25zm9 9a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25z" />
                        </svg>
                        <h1 className="font-bold">Services</h1>
                    </span>
                    
                    {/* Bento Grid */}
                    <div className="absolute inset-0 h-full opacity-30 pointer-events-none">
                        <img src={bentoGrid} alt="Bento Background Image" className="object-cover object-center h-full w-full"/>
                    </div>
                    {/* Bento Asset */}
                    <div className="absolute  right-0 h-full opacity-80 pointer-events-none">
                        <img src={bentoAsset2} alt="Bento Background Image" className="object-cover object-center h-full w-full"/>
                    </div>
                </div>
            </article>
        </section>
    )
}