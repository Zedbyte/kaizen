export default function Grid() {
    return (
            <div
            className="absolute inset-0 pointer-events-none"
            style={{
            backgroundImage:
                "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.04)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
            backgroundSize: "128px 128px",
            backgroundRepeat: "repeat",
            WebkitMaskImage: `
                radial-gradient(circle, transparent 0%, white 40%, transparent 80%),
                linear-gradient(180deg, transparent 5%, white 20%, white 80%, transparent 95%)
            `,
            maskImage: `
                radial-gradient(circle, transparent 0%, white 40%, transparent 80%),
                linear-gradient(180deg, transparent 5%, white 20%, white 80%, transparent 95%)
            `,
            WebkitMaskComposite: "intersect", // Ensures masks combine correctly
            maskComposite: "intersect",
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
            }}
        ></div>
    )
}