import HeroSection from '@/partials/home/HeroSection';
import AboutSection from '@/partials/home/AboutSection';
import CertificatesSection from '@/partials/home/CertificatesSection';
import TechStackSection from '@/partials/home/TechStackSection';
import RecentProjectsSection from '@/partials/home/RecentProjectsSection';
import CTASection from '@/partials/home/CTASection';
import Grid from '@/components/custom/Grid';
// import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
// import { Icon } from "@/components/custom/Icon";
import TestimonialsSection from '@/partials/home/TestimonialsSection';

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <div className='hero-block h-full relative' id='home'>
                <Grid />
                <div className="max-w-6xl mx-auto h-full flex flex-col items-center justify-center">
                    <HeroSection />
                </div>
            </div>

            {/* About Section */}
            <div className='about-block transition-colors duration-500 mt-40' id='about'>
                <div className="max-w-6xl mx-auto px-4 py-10">
                    <AboutSection />
                </div>
            </div>

            {/* Tech Stack Section */}
            <div className='tech-stack-block mt-40' id='skills'>
                <div className="max-w-6xl mx-auto py-10 h-full flex flex-col items-center justify-center">
                    <TechStackSection />
                </div>
            </div>
            
            {/* Certificates */}
            <div className='certificates-block mt-40' id='certificates'>
                <div className="max-w-6xl mx-auto py-10 h-full flex flex-col items-center justify-center">
                    <CertificatesSection />
                </div>
            </div>

            {/* Testimonials Section */}
            <div className='testimonials-block mt-40' id='testimonials'>
                <div className="max-w-6xl mx-auto py-10 h-full flex flex-col items-center justify-center">
                    <TestimonialsSection />
                </div>
            </div>

            {/* Recent Projects Section */}
            <div className='recent-projects-block transition-colors duration-500  border-zinc-800 mt-40' id='projects'>
                {/* <BackgroundBeamsWithCollision> */}
                    <div className="max-w-6xl mx-auto px-4 py-10  border-zinc-800 relative">
                        {/* <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
                        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
                        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
                        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" /> */}
                        <RecentProjectsSection />
                    </div>
                {/* </BackgroundBeamsWithCollision> */}
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

            {/* Contact Section */}
            <div className='cta-block pt-20 pb-20' id='contact'>
                <div className="max-w-6xl mx-auto px-4 pt-10 pb-10">
                    <CTASection />
                </div>
            </div> 
        </>
    );
}
