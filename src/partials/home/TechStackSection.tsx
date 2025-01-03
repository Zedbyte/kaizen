import TechMarquee from "@/components/motion-components/TechMarquee"
import { neutralSvgIcons, darkSvgIcons } from '@/constants/icons';

export default function TechStackSection() {
    return (
        <>
            <div className="w-full py-16
            text-white flex flex-col justify-center items-center 
            overflow-x-hidden gap-10">
                <TechMarquee images={neutralSvgIcons} from={0} to={"-100%"}/>
                <TechMarquee images={darkSvgIcons} from={"-100%"} to={0}/>
            </div>
        </>
    )
}