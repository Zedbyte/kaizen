import HeroSection from '@/partials/home/HeroSection';
import TechStackSection from '@/partials/home/TechStackSection';
import RecentProjectsSection from '@/partials/home/RecentProjectsSection';
import CTASection from '@/partials/home/CTASection';
import Grid from '@/components/custom/Grid';
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

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
            {/* <div className='recent-projects-block transition-colors duration-500 border-y border-zinc-800 relative antialiased'
            style={{
                maskImage: 
                `linear-gradient(
                    to bottom,
                    rgba(0, 0, 0, 0),
                    rgba(0, 0, 0, 1) 15%,
                    rgba(0, 0, 0, 1) 90%,
                    rgba(0, 0, 0, 0)
                )`
                }}>
                <BackgroundBeams />
                <div className="max-w-6xl mx-auto px-4 pt-10 my-10">
                    <RecentProjectsSection />
                </div>
            </div> */}
            <div className='recent-projects-block transition-colors duration-500 border-y border-zinc-800'>
                <BackgroundBeamsWithCollision>
                    <div className="max-w-6xl mx-auto px-4 pt-10 border-x border-zinc-800">
                            <RecentProjectsSection />
                    </div>
                </BackgroundBeamsWithCollision>
            </div>

            <div className='cta-block'>
                <div className="max-w-6xl mx-auto px-4 pt-10 pb-10">
                    <CTASection />
                </div>
            </div> 
        </>
    );
}
