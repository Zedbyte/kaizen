import { LayoutGrid } from "@/components/ui/layout-grid"
import { certificatesData } from "@/constants/data"
import React from "react";

export default function CertificateFunction() { 
    return (
        <section className="space-y-10 md:space-y-3 w-full">
            {/* Skills */}
            <div className="flex flex-col md:px-5">
                <div className="text-8xl font-bold flex items-center gap-5">
                    <h1 className="text-nowrap">
                        Recent
                        <span className="text-[#aa9d7d]"> Certifications.</span>
                    </h1>
                    <div className="border-b border-zinc-800 w-full mt-6" />
                </div>
            </div>

            <div className="w-full h-screen py-10 md:px-5">
                <LayoutGrid cards={cards} imgClassName=""/>
            </div>
        </section>
    )
}

const Skeleton = ({ provider, title, description, date} : { provider:string, title: string, description: string, date: string}) => {
        return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
            {provider} - {title} {date}
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            {description}
            </p>
        </div>
        );
    };
    
    const cards = certificatesData.map((certificate, index) => ({
        id: index + 1,
        content: <Skeleton provider={certificate.provider} title={certificate.name} date={certificate.date} description={certificate.description} />,
        className: "md:col-span-2 col-span-1",
        thumbnail: certificate.path || `https://images.unsplash.com/photo-${index}?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3`,
    }));