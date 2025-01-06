import { motion } from "framer-motion";
import { Reveal } from "@/components/motion-components/Reveal";

// Type definition for each icon's name and path
interface SvgIcon {
    name: string;
    path: string;
}

// import { useMemo } from 'react';
export type TechMarqueeProps = {
    from: number | string,
    to: string | number,
    images: SvgIcon[],
}


export default function TechMarquee({images, from, to} : TechMarqueeProps) {

    return (
        <div className="flex w-full" style={{
            maskImage: 
            `linear-gradient(
                to right,
                rgba(0, 0, 0, 0),
                rgba(0, 0, 0, 1) 20%,
                rgba(0, 0, 0, 1) 80%,
                rgba(0, 0, 0, 0)
            )`
            }}>
            <motion.div
                initial={{ x: `${from}` }}
                animate={{ x: `${to}` }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="flex flex-shrink-0"
            >
                {images.map((image, index) => {
                return (
                    <div key={index} className="flex flex-row-reverse pr-20 items-center">
                        <Reveal><h1 className="text-lg font-normal">{image.name}</h1></Reveal>
                        <div className="p-2 bg-gradient-to-br from-zinc-900 via-neutral-950 to-black border border-zinc-800 rounded-2xl mr-3">
                            <img className="h-12" src={image.path} />
                        </div>
                    </div>
                )
                })}
            </motion.div>

            <motion.div
                initial={{ x: `${from}` }}
                animate={{ x: `${to}` }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="flex flex-shrink-0"
            >
                {images.map((image, index) => {
                return (
                    <div key={index} className="flex flex-row-reverse pr-20 items-center">
                        <Reveal><h1 className="text-lg font-normal">{image.name}</h1></Reveal>
                        <div className="p-2 bg-gradient-to-br from-black via-zinc-950 to-[#1e1e1e] border border-zinc-800 rounded-2xl mr-3">
                            <img className="h-12" src={image.path} />
                        </div>
                    </div>
                )
                })}
            </motion.div>
        </div>
    )
}