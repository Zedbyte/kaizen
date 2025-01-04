import TechMarquee from "@/components/motion-components/TechMarquee"
import { upperMarquee, middleMarquee, lowerMarquee } from '@/constants/icons';

export default function TechStackSection() {
    return (
        <>
            <div className="w-full py-40
            text-white flex flex-col justify-center items-center 
            overflow-x-hidden gap-10">
                <TechMarquee images={upperMarquee} from={0} to={"-100%"}/>
                <TechMarquee images={middleMarquee} from={"-100%"} to={0}/>
                <TechMarquee images={lowerMarquee} from={0} to={"-100%"}/>
            </div>
        </>
    )
}