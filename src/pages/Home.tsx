import { useRef, useState, useEffect } from 'react';
import HeroSection from '@/partials/home/HeroSection';
import RecentProjectsSection from '@/partials/home/RecentProjectsSection';
import CTASection from '@/partials/home/CTASection';
import { projectColors } from "@/constants/data";

export default function Home() {
    const recentProjectsBlockRef = useRef<HTMLDivElement | null>(null);
    const projectRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
    const [bgColor, setBgColor] = useState('bg-[#0A0A0A]');

    useEffect(() => {
        const colors = projectColors; // Colors for each project

        const handleScroll = () => {
            const projectInView = projectRefs.findIndex((ref) => {
                const rect = ref.current?.getBoundingClientRect();
                return rect && rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;
            });

            if (projectInView !== -1) {
                setBgColor(colors[projectInView]);
            } else {
                setBgColor('bg-[#0A0A0A]');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className='hero-block md:min-h-[30rem] md:h-[30rem]'>
                <div className="max-w-6xl mx-auto px-4 py-10 h-full flex flex-col justify-end">
                    <HeroSection />
                </div>
            </div>
            <div className={`recent-projects-block transition-colors duration-500 ${bgColor}`} ref={recentProjectsBlockRef}>
                <div className="max-w-6xl mx-auto px-4 pt-10 md:pt-64 pb-96">
                    <RecentProjectsSection projectRefs={projectRefs} />

                    {/* <div className='cta-block bg-[#0A0A0A] mt-44 md:mt-96 mb-10 rounded-lg'>
                        <CTASection />
                    </div> */}
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
