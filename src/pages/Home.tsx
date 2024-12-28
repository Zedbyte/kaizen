import HeroSection from '@/partials/home/HeroSection'
import RecentProjectsSection from '@/partials/home/RecentProjectsSection'

export default function Home() {
    return(
        <>
            <div className='hero-block md:min-h-[28rem] md:h-[28rem]'>
                <div className="max-w-6xl mx-auto px-4 py-10 h-full flex flex-col justify-end">  
                    <HeroSection />
                </div>
            </div>
            <div className="recent-projects-block bg-black">
                <div className="max-w-6xl mx-auto px-4 pt-10 md:pt-64 pb-10">
                    <RecentProjectsSection />
                </div>
            </div>
        </>
    )
}