export default function MacOsHeader() {
    <div className="w-full flex justify-between border-b-2 border-stone-900 py-2 bg-neutral-900 rounded-t-lg px-5 shadow-md">
        <span className="flex gap-2 items-center">
            <svg
                width="1em"
                height="1em"
                fill="red"
                viewBox="0 0 16 16"
            >
                <path d="M16 8a8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 16 0z" />
            </svg>

            <svg
                width="1em"
                height="1em"
                fill="yellow"
                viewBox="0 0 16 16"
            >
                <path d="M16 8a8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 16 0z" />
            </svg>

            <svg
                width="1em"
                height="1em"
                fill="green"
                viewBox="0 0 16 16"
            >
                <path d="M16 8a8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 16 0z" />
            </svg>
        </span>

        <span>
            <h1 className="text-lg font-semibold tracking-wider">@mark</h1>
        </span>

        <span className="flex gap-2 items-center">
            <svg
                width="0.5em"
                height="0.5em"
                fill="#0FFF50"
                viewBox="0 0 16 16"
            >
                <path d="M16 8a8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 16 0z" />
            </svg>

            <h1 className="text-cs font-light">Online</h1>
        </span>
    </div>
}