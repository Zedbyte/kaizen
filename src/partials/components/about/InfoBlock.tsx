export type InfoBlockProps = {
    title: string;
    description: React.ReactNode; // Allows passing JSX or strings for flexibility
};

export default function InfoBlock({ title, description }: InfoBlockProps) {
    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-justify">{description}</p>
        </div>
    );
}
