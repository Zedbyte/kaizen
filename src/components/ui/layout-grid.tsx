import React, { useState, } from "react";
import {  motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Card = {
    id: number;
    content: JSX.Element | React.ReactNode | string;
    className: string;
    thumbnail: string;
    };

    export const LayoutGrid = ({ cards, imgClassName }: { cards: Card[], imgClassName: string}) => {
    const [selected, setSelected] = useState<Card | null>(null);
    const [lastSelected, setLastSelected] = useState<Card | null>(null);

    const handleClick = (card: Card) => {
        setLastSelected(selected);
        setSelected(card);
    };

    const handleOutsideClick = () => {
        setLastSelected(selected);
        setSelected(null);
    };

    return (
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-4  max-w-7xl mx-auto gap-4 relative">
        {cards.map((card, i) => (
            <div key={i} className={cn(card.className, "")}>
            <motion.div
                onClick={() => handleClick(card)}
                className={cn(
                card.className,
                "relative overflow-hidden border border-zinc-200 dark:border-zinc-800",
                selected?.id === card.id
                    ? "rounded-lg cursor-pointer absolute inset-0 h-4/6 w-full md:w-10/12 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                    : lastSelected?.id === card.id
                    ? "z-40 bg-neutral-100 dark:bg-neutral-950 rounded-md h-full w-full"
                    : "bg-neutral-100 dark:bg-neutral-950 rounded-md h-full w-full "
                )}
                layoutId={`card-${card.id}`}
            >
                {selected?.id === card.id && <SelectedCard selected={selected} />}
                <ImageComponent card={card} className={`${selected?.id === card.id? "p-0 object-fill" : "p-2 object-fill"} ${imgClassName}`}/>
            </motion.div>
            </div>
        ))}
        <motion.div
            onClick={handleOutsideClick}
            className={cn(
            "absolute h-full w-full left-0 top-0 bg-gray-100 dark:bg-black opacity-0 z-10",
            selected?.id ? "pointer-events-auto" : "pointer-events-none"
            )}
            animate={{ opacity: selected?.id ? 0.3 : 0 }}
        />
        </div>
    );
    };

    const ImageComponent = ({ card, className }: { card: Card, className: string }) => {
    return (
        <motion.img
        layoutId={`image-${card.id}-image`}
        src={card.thumbnail}
        className={cn(
            `${ className } object-center absolute inset-0 h-full w-full transition duration-200`
        )}
        alt="thumbnail" 
        />
    );
    };

    const SelectedCard = ({ selected }: { selected: Card | null }) => {
    return (
        <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
        <motion.div
            initial={{
            opacity: 0,
            }}
            animate={{
            opacity: 0.6,
            }}
            className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
        />
        <motion.div
            layoutId={`content-${selected?.id}`}
            initial={{
            opacity: 0,
            y: 100,
            }}
            animate={{
            opacity: 1,
            y: 0,
            }}
            exit={{
            opacity: 0,
            y: 100,
            }}
            transition={{
            duration: 0.3,
            ease: "easeInOut",
            }}
            className="relative px-8 pb-4 z-[70]"
        >
            {selected?.content}
        </motion.div>
        </div>
    );
};
