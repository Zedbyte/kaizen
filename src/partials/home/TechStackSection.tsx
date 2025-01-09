import { Reveal } from "@/components/motion-components/Reveal";
import TechMarquee from "@/components/motion-components/TechMarquee"
import { upperMarquee, middleMarquee, lowerMarquee } from '@/constants/icons';
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ToggleButton from "../components/home/ToggleButton";
import bentoGrid from "/public/assets/bento/grid.svg";

export default function TechStackSection() {
    const [isOn, setIsOn] = useState(false);

    return (
        <section className="space-y-10 md:space-y-3 w-full">
            {/* Skills */}
            <div className="flex flex-col md:px-5">
                <div className="text-8xl font-bold flex items-center gap-5">
                    <h1 className="text-nowrap">
                        Skills
                        <span className="text-[#aa9d7d]">.</span>
                    </h1>
                    <div className="border-b border-zinc-800 w-full mt-6" />
                </div>
            </div>

            <div className="w-full py-10 relative md:px-5">

                {/* Toggle Button */}
                <ToggleButton isOn={isOn} setIsOn={setIsOn} />

                {/* Conditional Views */}
                <AnimatePresence mode="wait">
                {!isOn ? (
                    <motion.div
                    key="default-view"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full py-10
                    text-white flex flex-col justify-center items-center 
                    overflow-x-hidden gap-10 relative"
                    >
                        {/* Default View */}
                        <TechMarquee images={upperMarquee} from={0} to={"-100%"}/>
                        <TechMarquee images={middleMarquee} from={"-100%"} to={0}/>
                        <TechMarquee images={lowerMarquee} from={0} to={"-100%"}/>
                    </motion.div>
                ) : (
                    <motion.div
                    key="view-change"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className=" bg-neutral-950 rounded-lg shadow-2xl border border-stone-900 my-5 group/skills"
                    >   
                        <span className="flex items-center gap-2 text-zinc-400 group-hover/skills:translate-x-2 transition-transform duration-200 px-5 pt-5">
                            <svg
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M5 2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2h3.5A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5H14a.5.5 0 0 1-1 0H3a.5.5 0 0 1-1 0h-.5A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2zm1 0h4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1M1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H3V3zM15 12.5v-9a.5.5 0 0 0-.5-.5H13v10h1.5a.5.5 0 0 0 .5-.5m-3 .5V3H4v10z" />
                            </svg>
                            <h1 className="font-bold">Technologies</h1>
                        </span>

                        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-10 gap-7 py-10 px-10 relative">
                            {/* View Change */}
                            {[upperMarquee, middleMarquee, lowerMarquee].map((marquee, marqueeIndex) =>
                                marquee.map((icon: any, index: number) => (
                                <div key={`${marqueeIndex}-${index}`} className="col-span-2 flex">
                                    <Reveal>
                                        <div className="flex flex-row-reverse justify-start items-center">
                                            <h1 className="text-lg font-normal">{icon.name}</h1>
                                            <div className="p-2 bg-gradient-to-br from-zinc-900 via-neutral-950 to-black border border-zinc-800 
                                            rounded-2xl mr-3 shadow-lg hover:scale-110 transition-transform duration-200">
                                                <img src={icon.path} alt={icon.name} className="h-12 w-full" />
                                            </div>
                                        </div>
                                    </Reveal>
                                </div>
                                ))
                            )}

                            {/* Bento Grid */}
                            <div className="absolute inset-0 h-full opacity-30 pointer-events-none">
                                <img src={bentoGrid} alt="Bento Background Image" className="object-cover object-center h-full w-full"/>
                            </div>
                        </div>
                    </motion.div>
                )}
                </AnimatePresence>
            </div>
        </section>
    )
}