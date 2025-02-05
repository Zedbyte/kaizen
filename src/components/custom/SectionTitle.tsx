
export default function SectionTitle({title, subtitle} : { title: string, subtitle: string}) {
    return (
        <div className="flex flex-col items-center md:px-5">
            <div className="flex-col justify-center gap-5 px-5 lg:px-0">
                <h1 className="text-2xl text-wrap lg:text-nowrap  lg:text-4xl font-bold text-center 
                bg-gradient-to-b from-[#888886] to-[#5c5a57] dark:from-[#eeeeec] dark:to-[#aba9a3] text-transparent bg-clip-text">
                    {title}
                </h1>
                <h2 className="text-zinc-800 dark:text-zinc-400 text-center text-md lg:text-base">{subtitle}</h2>
            </div>
        </div>
    )
}