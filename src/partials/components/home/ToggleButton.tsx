import { motion } from "framer-motion";

const toggleVariants = {
    on: {
        stroke: "gray",
        pathLength: 0.2,
        pathOffset: 0.2,
        transition: {
            duration: 0.23,
            ease: "circOut"
        }
    },
    
        off: {
        stroke: "#0A0A0A",
        pathLength: 0.2,
        pathOffset: 0.6,
        transition: {
            duration: 0.23,
            ease: "circOut"
        }
    }
};

export default function ToggleButton({ isOn, setIsOn }: { 
    isOn: boolean; 
    setIsOn: (value: boolean) => void 
    }) {
    return (
        <div className="absolute top-0 right-0 h-12 w-12" onClick={() => setIsOn(!isOn)}>
            <svg viewBox="0 0 50 30" xmlns="http://www.w3.org/2000/svg">
            <motion.path
                strokeLinecap="round"
                stroke="white"
                strokeWidth={17}
                d="M 10, 15 L 40, 15"
            />
            <motion.path
                variants={toggleVariants}
                animate={isOn ? "on" : "off"}
                strokeWidth={15}
                strokeLinecap="round"
                d="M 0, 15 L 50, 15"
            />
            </svg>
        </div>
    )
}