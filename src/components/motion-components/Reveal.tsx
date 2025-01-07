import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView, useAnimation } from "framer-motion";

interface RevealProps {
    children: JSX.Element;
    width?: "fit-content" | "100%";
    className?: string;
    delay?: number;
    }

    export const Reveal = ({ children, width = "fit-content", className, delay}: RevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const animationControls = useAnimation();

    useEffect(() => {
        if (isInView) {
        animationControls.start("visible");
        }
    }, [isInView]);

    return (
        <div ref={ref} style={{ width, }} className={className}>
        <motion.div
            variants={{
            hidden: { opacity: 0, filter: "blur(10px)" },
            visible: { opacity: 1, filter: "blur(0px)" },
            }}
            initial="hidden"
            animate={animationControls}
            transition={{ duration: 0.5, delay: delay ? delay : 0.05 }}
        >
            {children}
        </motion.div>
        </div>
    );
};
