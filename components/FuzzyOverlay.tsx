'use client'
import { motion } from "framer-motion";

interface IProps {

}

const FuzzyOverlay = ({ }: IProps) => {
    return <>
        <motion.div
            initial={{ transform: "translateX(-10%) translateY(-10%)" }}
            animate={{
                transform: "translateX(10%) translateY(10%)",
            }}
            transition={{
                repeat: Infinity,
                duration: 0.2,
                ease: "linear",
                repeatType: "mirror",
            }}
            style={{
                backgroundImage: 'url("https://www.hover.dev/noise.png")',
                // backgroundImage: 'url("/noise.png")',
            }}
            className="pointer-events-none absolute -inset-[100%] opacity-[15%] overflow-hidden"
        />
    </>;
};

export default FuzzyOverlay;