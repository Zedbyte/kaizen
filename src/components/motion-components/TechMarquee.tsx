import { motion } from "framer-motion";

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
                        <h1 className="text-2xl font-medium font-mono">{image.name}</h1>
                        <img className="h-16 pr-3" src={image.path} />
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
                        <h1 className="text-2xl font-bold font-mono">{image.name}</h1>
                        <img className="h-16 pr-3" src={image.path} />
                    </div>
                )
                })}
            </motion.div>
        </div>
    )
}