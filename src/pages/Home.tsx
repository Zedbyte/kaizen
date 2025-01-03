import HeroSection from '@/partials/home/HeroSection';
import RecentProjectsSection from '@/partials/home/RecentProjectsSection';
import CTASection from '@/partials/home/CTASection';
import Grid from '@/components/custom/Grid';

export default function Home() {
    return (
        <>
            <div className='hero-block h-full relative border border-zinc-800'>
                <Grid />
                <div className="max-w-6xl mx-auto h-full flex flex-col items-center justify-center">
                    <HeroSection />
                </div>
            </div>
            <div className='hero-block relative'>
                <div className="max-w-6xl mx-auto h-full flex flex-col items-center justify-center">
                    tech stack
                </div>
            </div>
            <div className='recent-projects-block transition-colors duration-500'>
                <div className="max-w-6xl mx-auto px-4 pt-10 md:pt-64 pb-64">
                    <RecentProjectsSection />
                </div>
            </div>

            <div className='cta-block bg-[#0A0A0A]'>
                <div className="max-w-6xl mx-auto px-4 pt-10 pb-10">
                    <CTASection />
                </div>
            </div> 
        </>
    );
}
