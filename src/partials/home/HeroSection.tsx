import { userData } from "@/constants/data";

export default function HeroSection() {
    return (
        <section className="flex flex-col md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0">
            {/* Text Content */}
            <div className="md:w-1/2 space-y-4">
                <header className="space-y-4">
                    <h1 className="text-4xl font-base">
                        <span className="font-bold">{userData.header.title_bold}</span> {userData.header.title}
                    </h1>
                    <h2 className="text-2xl font-medium">
                        <span className="font-bold">{userData.header.subtitle_bold}</span> {userData.header.subtitle}
                    </h2>
                </header>
                <p className="text-lg">
                    A {userData.age}-year-old <span className="font-bold">{userData.header.role}</span> based in {userData.location}
                </p>
            </div>

            {/* Image Content */}
            <div className="md:w-1/2 flex justify-center">
                <figure>
                    <img 
                        src={userData.header.image} 
                        alt="Profile Picture" 
                        className="max-w-full h-auto rounded-lg shadow-lg"
                    />
                </figure>
            </div>
        </section>
    )
}