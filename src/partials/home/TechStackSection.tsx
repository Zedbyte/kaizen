import TechMarquee from "@/components/motion-components/TechMarquee"
import { upperMarquee, middleMarquee, lowerMarquee } from '@/constants/icons';

export default function TechStackSection() {
    return (
        <section className="space-y-10 md:space-y-3 w-full">
            {/* Skills */}
            <div className="flex flex-col md:px-5">
                <div className="text-8xl font-bold flex items-center gap-5">
                    <div className="border-b border-zinc-800 w-full mt-6" />
                    <h1 className="text-nowrap">
                        Skills
                        <span className="text-[#aa9d7d]">.</span>
                    </h1>
                </div>
            </div>

            <div className="w-full py-20
            text-white flex flex-col justify-center items-center 
            overflow-x-hidden gap-10">
                <TechMarquee images={upperMarquee} from={0} to={"-100%"}/>
                <TechMarquee images={middleMarquee} from={"-100%"} to={0}/>
                <TechMarquee images={lowerMarquee} from={0} to={"-100%"}/>
            </div>
        </section>
    )
}