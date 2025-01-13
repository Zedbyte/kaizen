
export default function SectionTitleDashed({title} : { title: string}) {
    return (
        <div className="flex flex-col md:px-5">
            <div className="text-8xl font-bold flex items-center gap-5">
                <h1 className="text-nowrap">
                    {title}
                    <span className="text-[#aa9d7d]">.</span>
                </h1>
                <div className="border-b border-zinc-800 w-full mt-6" />
            </div>
        </div>
    )
}