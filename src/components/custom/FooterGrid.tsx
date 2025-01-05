import footerGrid from "@/assets/footer-grid.svg";

export default function FooterGrid() {
    return (
        <div className="w-full min-h-72 bottom-0 absolute left-0 -z-50">
            <img
            src={footerGrid}
            alt="grid"
            className="w-full h-full opacity-50"
            />
        </div>
    )
}