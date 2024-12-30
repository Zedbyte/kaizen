export type PersonalLinksProps = {
    link: string;
    icon: React.ReactNode;
    text: string;
}

export default function PersonalLinks({text, link, icon} : PersonalLinksProps) {
    return (
        <>
            <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                {icon}
                <span className="font-mono tracking-wide hover:underline">{text}</span>
            </a>
        </>
    )
}