import HeroSection from '@/partials/home/HeroSection';
import RecentProjectsSection from '@/partials/home/RecentProjectsSection';
import CTASection from '@/partials/home/CTASection';

export default function Home() {
    return (
        <>
            <div className='hero-block h-full'>
                <div className="max-w-6xl mx-auto px-4 py-10 h-full flex flex-col justify-end">
                    <HeroSection />
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
