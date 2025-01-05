import { userData } from "@/constants/data";
import { Reveal } from "@/components/motion-components/Reveal";
import profileAvatar from "@/assets/profile-avatar-v4.png";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { FlipWords } from "@/components/ui/flip-words";
// import { AuroraBackground } from "@/components/ui/aurora-background"; //Will implement a button for on/off alternative to spotlight
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Spotlight } from "@/components/ui/Spotlight";

export default function HeroSection() {
    return (
        <>  
            <section className="flex items-center justify-center h-[30rem]">
                {/* Spotlight Effect */}
                <div className="absolute h-full w-full overflow-hidden -z-20">
                    <Spotlight
                        className="-top-40 left-0 md:left-80 md:-top-10 "
                        fill="gray"
                    />  

                    <Spotlight
                        className="top-40 left-0 md:left-full md:top-20  h-[50vh]"
                        fill="#aa9d7d"
                    />

                    <Spotlight
                        className="top-40 left-0 md:left-0 md:top-36  h-[80vh]"
                        fill="gray"
                    />
                </div>

                {/* Full Name */}
                <TextGenerateEffect words={userData.name} 
                className="absolute inset-x-0 flex justify-center text-[12rem] font-bold max-w-6xl mx-auto"/>

                {/* Avatar */}
                <Reveal delay={1.5}>
                    <figure className="flex items-center justify-center h-full w-full z-50">
                        <img 
                            src={profileAvatar}
                            alt="Kaizen Profile Picture"
                            className="h-full w-5/12 rounded-2xl object-contain pointer-events-none"
                        />
                    </figure>
                </Reveal>
            </section>

            <section className="flex flex-col items-center justify-center h-full space-y-10 max-w-4xl py-5">
                <div className="space-y-8 flex flex-col items-center">
                    {/* Job Role */}
                    {/* <Reveal>
                        <h1 className="text-6xl text-center font-bold">
                            <span className=" text-[#AA9D7D]">
                                {userData.header.subtitle_bold}
                            </span>
                            &nbsp;
                            <span className="break-word">
                                {userData.header.subtitle}
                            </span>
                        </h1>
                    </Reveal> */}
                    <TextGenerateEffect words={userData.header.subtitle_bold + " " + userData.header.subtitle}
                    className="text-6xl text-center font-bold" keyword={true} substring={[0, 2]} additionalStyles="text-[#AA9D7D]"/>
                    
                    <Reveal>
                        <h2 className="text-xl text-center">
                        A {userData.age}-year-old&nbsp;
                        <span>
                            <FlipWords className="font-bold text-[#AA9D7D]" words={userData.header.role} />
                        </span>
                        &nbsp;<br />based in {userData.province}, {userData.country}.</h2>
                    </Reveal>
                </div>


                {/* Button Section */}
                <div className="flex w-6/12 space-x-9">
                    {/* Schedule a Call Button  */}
                    <a href="https://calendly.com/kaizxn/consultation" target="_blank" rel="noopener noreferrer"
                    className="bg-[#1e1e1e] text-white font-medium w-full py-2 rounded-full 
                    hover:bg-[#2b2b2b] border border-neutral-700 shadow-lg
                    transition duration-300 flex items-center justify-center">
                        <span className="flex items-center justify-center space-x-2">
                            <p>Schedule A Call</p>
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
                        </span>
                    </a>

                    {/* View Resume Button */}
                    <a href="https://google.com" target="_blank" className="flex justify-center text-center w-full">
                        <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 w-full"
                        >
                            <p>View Resume</p>
                            <svg
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path
                                fillRule="evenodd"
                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                />
                            </svg>
                        </HoverBorderGradient>
                    </a>
                </div>
            </section>
        </>
    )
}