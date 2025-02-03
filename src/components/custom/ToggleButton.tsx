export default function ToggleButton({ isOn, setIsOn }: { 
    isOn: boolean; 
    setIsOn: (value: boolean) => void 
    }) {

    return (
        <div className="absolute top-0 right-5">
            <div className="flex">
                <button className={`${!isOn  ? 'bg-neutral-300 dark:bg-neutral-900' : 'bg-neutral-200 dark:bg-neutral-950' } p-1 cursor-pointer border rounded-l-md
            border-zinc-400 dark:border-zinc-700 border-r-zinc-500 dark:border-r-zinc-900 bg-neutral-200 dark:hover:bg-neutral-900 transition-colors duration-200`} onClick={() => setIsOn(false)}>
                    <svg
                    width="1.5em"
                    height="1.5em"
                    fill="gray"
                    viewBox="0 0 24 24"
                >
                    <path d="M3 5v14h18V5H3m16 2v2H5V7h14m0 4v2H5v-2h14M5 17v-2h14v2H5z" />
                    </svg>
                </button>
                <button className={`${isOn  ? 'bg-neutral-300 dark:bg-neutral-900' : 'bg-neutral-200 dark:bg-neutral-950' } p-1 cursor-pointer border rounded-r-md
            border-zinc-400 dark:border-zinc-700 border-l-zinc-500 dark:border-l-zinc-900 bg-neutral-200 dark:hover:bg-neutral-900 transition-colors duration-200`} onClick={() => setIsOn(true)}>
                    <svg
                        width="1.5em"
                        height="1.5em"
                        fill="gray"
                        viewBox="0 0 24 24"
                    >
                        <path d="M4 5v13h17V5H4m10 2v3.5h-3V7h3M6 7h3v3.5H6V7m0 9v-3.5h3V16H6m5 0v-3.5h3V16h-3m8 0h-3v-3.5h3V16m-3-5.5V7h3v3.5h-3z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}