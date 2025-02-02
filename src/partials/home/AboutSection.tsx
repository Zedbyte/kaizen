import { useEffect, useState } from "react"
import { aboutData } from "@/constants/data"
import { experienceData } from "@/constants/data"
import Timeline from "@/components/custom/Timeline"
import SectionTitle from "../../components/custom/SectionTitle"
import bentoAsset1 from "/assets/bento/b4.svg"
import bentoAsset2 from "/assets/bento/b5.svg"
import bentoGrid from "/assets/bento/grid.svg"
import GitHubActivityCalendar from "../../components/custom/GithubCalendar";
import getGithubRecentCommit, { GithubRecentCommitType } from '@/services/getRecentCommit';
import BentoWrapper from "@/components/custom/_about/BentoWrapper"

export default function AboutSection() {
    const [recentCommit, setRecentCommit] = useState<GithubRecentCommitType | null>(null);
    const [_error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getGithubRecentCommit();
                setRecentCommit(data);
            } catch (err) {
                setError('Failed to fetch recent commit data');
                console.error(err);
            }
        };
    
        fetchData();
    }, []);

    return (
        <section className="space-y-10 md:space-y-10">
            {/* About */}
            <SectionTitle title="About" subtitle="Discover My Professional Journey, Experiences, and Areas of Expertise"/>

            {/* Content */}
            <article className="grid grid-cols-1 md:grid-cols-12 px-5 gap-5">
                {/* Introduction */}
                <BentoWrapper 
                title="Introduction" 
                svg={
                    <svg
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                >
                    <path d="M5 2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2h3.5A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5H14a.5.5 0 0 1-1 0H3a.5.5 0 0 1-1 0h-.5A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2zm1 0h4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1M1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H3V3zM15 12.5v-9a.5.5 0 0 0-.5-.5H13v10h1.5a.5.5 0 0 0 .5-.5m-3 .5V3H4v10z" />
                </svg>
                }
                additionalClass="md:col-span-7 relative overflow-hidden space-y-5 "
                >
                    {/* Bento Grid */}
                    <div className="absolute top-0 left-0 h-full opacity-30 pointer-events-none">
                        <img src={bentoGrid} alt="Bento Background Image" className="object-cover object-center h-full w-full"/>
                    </div>
                    {/* Bento Asset */}
                    <div className="absolute bottom-0 right-0 h-2/6 opacity-80 pointer-events-none">
                        <img src={bentoAsset1} alt="Bento Background Image" className="object-cover object-center h-full w-full"/>
                    </div>

                    <h1 className="text-secondary-light dark:text-secondary-dark text-md font-semibold tracking-wide leading-relaxed">
                        { aboutData.header }
                    </h1>

                    <p className="text-secondary-light dark:text-secondary-dark text-sm font-light tracking-wider leading-relaxed">
                        { aboutData.introduction }
                    </p>
                </BentoWrapper>

                {/* Experience */}
                <BentoWrapper 
                title="Experience"
                svg={
                    <svg
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 640 512"
                    >
                        <path d="M64 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v256h-64V96H128v256H64V96zM0 403.2C0 392.6 8.6 384 19.2 384h601.6c10.6 0 19.2 8.6 19.2 19.2 0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zm112-34 48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" />
                    </svg>
                }
                additionalClass="md:col-span-5 row-span-2 space-y-5 "
                viewAll={true}>
                    <Timeline data={experienceData} />
                </BentoWrapper>

                {/* Recent Activity */}
                <BentoWrapper 
                title="Recent Activity"
                svg={
                    <svg
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 0 1 5.25 7H4v4a1 1 0 0 0 1 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0 1 14.25 16h-3.5A1.75 1.75 0 0 1 9 14.25v-.75H5A2.5 2.5 0 0 1 2.5 11V7h-.75A1.75 1.75 0 0 1 0 5.25zm1.75-.25a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25zm9 9a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25z" />
                    </svg>
                }
                additionalClass="md:col-span-7 relative overflow-hidden flex flex-col">
                    {/* Bento Grid */}
                    <div className="absolute inset-0 h-full opacity-25 pointer-events-none">
                        <img src={bentoGrid} alt="Bento Background Image" className="object-cover object-center h-full w-full"/>
                    </div>
                    {/* Bento Asset */}
                    <div className="absolute  right-0 h-full opacity-65 pointer-events-none">
                        <img src={bentoAsset2} alt="Bento Background Image" className="object-cover object-center h-full w-full"/>
                    </div>

                    <div className="h-full flex items-center flex-grow">
                        {recentCommit ? (
                            <div className="flex items-center space-x-5">
                                <figure className="p-2 bg-neutral-200 dark:bg-neutral-900 rounded-md">
                                    <svg
                                        width="5em"
                                        height="5em"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                    </svg>
                                </figure>

                                <span>
                                    <h3 className="text-xs font-semibold text-gray-500">Github ･&nbsp; 
                                        {new Date(recentCommit.created_at).getFullYear()}-
                                        {new Date(recentCommit.created_at).getMonth() + 1}-
                                        {new Date(recentCommit.created_at).getDate()}
                                    </h3>

                                    <h1 className="text-lg font-bold">
                                        {recentCommit.commit_message}
                                    </h1>

                                    <h2 className="text-sm font-semibold text-gray-500">
                                        {recentCommit.repository_name}
                                    </h2>
                                </span>
                            </div>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </BentoWrapper>

                {/* GitHub Activity */}
                <BentoWrapper 
                title="GitHub Activity"
                svg={
                    <svg
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path
                        fillRule="evenodd"
                        d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2"
                        />
                    </svg>
                }
                additionalClass="space-y-5 md:col-span-12">
                    <GitHubActivityCalendar />
                </BentoWrapper>
            </article>
        </section>
    )
}