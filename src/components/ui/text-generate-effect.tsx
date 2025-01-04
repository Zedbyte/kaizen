import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
    words,
    className,
    filter = true,
    duration = 0.5,
    keyword = false,
    substring = [],
    additionalStyles,
    }: {
    words: string;
    className?: string;
    filter?: boolean;
    duration?: number;
    keyword?: boolean;
    substring?: Array<number>;
    additionalStyles?: string;
    }) => {
    const [scope, animate] = useAnimate();
    let wordsArray = words.split(" ");
    useEffect(() => {
        animate(
        "span",
        {
            opacity: 1,
            filter: filter ? "blur(0px)" : "none",
        },
        {
            duration: duration ? duration : 1,
            delay: stagger(0.2),
        }
        );
    }, [scope.current]);

    const renderWords = () => {
        return (
        <motion.div ref={scope}>
            {wordsArray.map((word, idx) => {

            // Determine if the current index falls within the range specified in substring
            const shouldApplyStyles = keyword && idx >= substring[0] && idx <= substring[1];

            return (
                <motion.span
                key={word + idx}
                className={`${shouldApplyStyles ? additionalStyles : '' } opacity-0`}
                style={{
                    filter: filter ? "blur(10px)" : "none",
                }}
                >
                {word}{" "}
                </motion.span>
            );
            })}
        </motion.div>
        );
    };

    return (
        <div className={cn("font-normal", className)}>
            {renderWords()}
        </div>
    );
};
