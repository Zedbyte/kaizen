import "@/index.css";
import FooterGrid from "@/components/custom/FooterGrid";

export default function Footer() {
    return (
        <footer className="relative">
            <FooterGrid />
            <div className="max-w-6xl mx-auto px-4 py-8 border-t border-border">
                <p className="text-sm text-foreground/70">© {new Date().getFullYear()} Mark Santos. All rights reserved.</p>
            </div>
        </footer>
    )
}