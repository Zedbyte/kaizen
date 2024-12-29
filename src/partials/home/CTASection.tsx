import { useEffect, useRef } from "react";

// Declare the Starback property on the window object
declare global {
    interface Window {
        Starback: any;
    }
}


export default function CTASection() {

    const canvasRef = useRef(null);

    useEffect(() => {
        // Dynamically load the starback.js script
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/starback@2.1.1/dist/starback.global.js';
        script.async = true;
        script.onload = () => {
            // Initialize Starback once the script is loaded
            const canvas = canvasRef.current;
            if (canvas && window.Starback) {
                new window.Starback(canvas, {
                    type: 'line',
                    quantity: 100,
                    direction: 225,
                    backgroundColor: ['#0e1118', '#0C0C0C'],
                    randomOpacity: true,
                });
            }
        };
        document.body.appendChild(script);

        // Cleanup script on component unmount
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section className="relative flex flex-col items-center justify-center space-y-10 md:space-y-20 py-20 rounded-lg dark:bg-[#0C0C0C]">
        {/* Background Canvas */}
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none rounded-lg"
        ></canvas>

        {/* Content */}
        <div className="relative z-10 text-center flex flex-col gap-5">
            <h2 className="text-7xl font-semibold">Like What You're Seeing?</h2>
            <p className="text-3xl dark:text-gray-600 font-medium">
                Let's work together to create something great!
            </p>
        </div>

        <div className="relative z-10">
            <button className="py-3 px-6 border rounded-lg text-lg font-bold transition-colors duration-200
            dark:border-white dark:text-white hover:dark:text-black dark:hover:bg-gray-200">
                Get in Touch
            </button>
        </div>
    </section>
    )

}