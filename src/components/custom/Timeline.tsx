interface TimelineProps {
    data: { 
        date: string, 
        title: string, 
        subtitle: string,
        description: string }[];
}

export default function Timeline({ data } : TimelineProps) {
    return (
        <div className="relative space-y-5">
            {/* Line */}
            <div className="absolute left-1.5 top-4 bottom-2 w-px bg-border bg-white/20"></div>
            {data.map((item, index) => {
                return (
                    <div key={index} className="relative pl-6 group">
                        {/* Circle */}
                        <div className={`${index === 0 ? 'bg-white border' : 'border-2' } border-zinc-600 absolute left-0 top-4 w-3 h-3 rounded-full group`}>
                            <div className={`${index === 0 ? 'bg-white animate-ping' : 'bg-black'}
                                        group-hover:bg-white transition-colors duration-200 w-full h-full rounded-full`}>
                            </div>
                            <div className="absolute inset-0 rounded-full border-2 border-transparent"></div>
                        </div>
                        {/* Content */}
                        <div className="space-y-3 group rounded-md p-2">
                            <span className="space-y-1">
                                <span className="flex justify-between border-b border-zinc-600 pb-1">
                                    <h1 className="font-bold text-md">{ item.title }</h1>
                                    <span className="text-xs py-1 px-2 rounded-full border border-zinc-600">{ item.date }</span>
                                </span>
                                <h2 className="font-medium text-sm">{ item.subtitle }</h2>
                            </span>

                            <p className="font-light text-sm group">{ item.description }</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}