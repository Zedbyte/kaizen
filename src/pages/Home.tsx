import HeroSection from '@/partials/home/HeroSection';
import TechStackSection from '@/partials/home/TechStackSection';
import RecentProjectsSection from '@/partials/home/RecentProjectsSection';
import CTASection from '@/partials/home/CTASection';
import Grid from '@/components/custom/Grid';
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Icon } from "@/components/custom/Icon";

export default function Home() {
    return (
        <>
            <div className='hero-block h-full relative'>
                <Grid />
                <div className="max-w-6xl mx-auto h-full flex flex-col items-center justify-center">
                    <HeroSection />
                </div>
            </div>
            <div className='tech-stack-block'>
                <div className="max-w-6xl mx-auto h-full flex flex-col items-center justify-center">
                    <TechStackSection />
                </div>
            </div>
            <div className='recent-projects-block transition-colors duration-500 border-y border-zinc-800'>
                <BackgroundBeamsWithCollision>
                    <div className="max-w-6xl mx-auto px-4 pt-10 border-x border-zinc-800 relative">
                        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
                        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
                        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
                        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
                        <RecentProjectsSection />
                    </div>
                </BackgroundBeamsWithCollision>
            </div>
            {/* <div className='recent-projects-block transition-colors duration-500 border-y border-zinc-800'>
                <div className='max-w-6xl mx-auto relative'>
                    <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black z-50" />
                    <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black z-50" />
                    <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black z-50" />
                    <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black z-50" />

                    <BackgroundBeamsWithCollision>
                        <div className="border-x border-zinc-800">
                            <RecentProjectsSection />
                        </div>
                    </BackgroundBeamsWithCollision>
                </div>
            </div> */}

            <div className='cta-block'>
                <div className="max-w-6xl mx-auto px-4 pt-10 pb-10">
                    <CTASection />
                </div>
            </div> 
        </>
    );
}
