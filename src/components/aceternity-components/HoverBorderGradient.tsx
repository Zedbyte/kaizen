
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export function ACButtonGradient() {
    return (
        <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        >
            <span>Aceternity UI</span>
        </HoverBorderGradient>
        );
    }
