import { Link, } from "react-router-dom";
import { userData } from "@/constants/data";
import { Reveal } from "@/components/motion/Reveal";
import "@/index.css";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { useEffect, useState } from "react";

export default function NavigationBar() {

    const [isDarkMode, setIsDarkMode] = useState(
        () => localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        const root = document.documentElement;
        if (isDarkMode) {
            root.classList.add("dark");
            root.classList.remove("light");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            root.classList.add("light");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-13">
            <nav className="flex md:flex-row justify-between items-center">
                <div className="flex flex-col">
                    <Link to="/">
                        <TextGenerateEffect className="font-semibold text-xl dark:text-gray-100" words={userData.name} />
                        <TextGenerateEffect className="text-base font-light text-gray-500 dark:text-gray-300" words={userData.designation} />
                    </Link>
                </div>

                <div className="hidden md:block">
                    <ul className="flex text-base space-x-8">
                        <li>
                            {/* <NavLink 
                                to="/about" 
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-white font-normal"
                                        : "text-gray-600 dark:text-gray-300 font-normal hover:text-gray-800 dark:hover:text-gray-400"
                                }
                            >
                                <TextGenerateEffect words="About" />
                            </NavLink> */}
                            <a href="#about" className="text-gray-600 dark:text-gray-300 font-normal hover:text-gray-800 dark:hover:text-gray-400">
                                <TextGenerateEffect words="About" />
                            </a>
                        </li>
                        <li>
                            <a href="#testimonials" className="text-gray-600 dark:text-gray-300 font-normal hover:text-gray-800 dark:hover:text-gray-400">
                                <TextGenerateEffect words="Testimonials" />
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="text-gray-600 dark:text-gray-300 font-normal hover:text-gray-800 dark:hover:text-gray-400">
                                <TextGenerateEffect words="Projects" />
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="text-gray-600 dark:text-gray-300 font-normal hover:text-gray-800 dark:hover:text-gray-400">
                                <TextGenerateEffect words="Contact" />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center gap-7">
                    <ul className="flex gap-4">
                        {/* @https://reactsvgicons.com/ */}
                        <Reveal>
                            <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-50 font-normal hover:text-gray-800 dark:hover:text-gray-400 transition duration-200">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"> 
                                    <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z" /> 
                                </svg>
                            </Link>
                        </Reveal>

                        <Reveal>
                            <Link to="mailto:markjeromesantos102@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-50 font-normal hover:text-gray-800 dark:hover:text-gray-400 transition duration-200">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20 18h-2V9.25L12 13 6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z" />
                                    </svg>
                            </Link>
                        </Reveal>

                        <Reveal>
                            <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-50 font-normal hover:text-gray-800 dark:hover:text-gray-400 transition duration-200">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"> 
                                    <path d="M20 3H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 110-3.096 1.548 1.548 0 010 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z" /> 
                                </svg>
                            </Link>
                        </Reveal>

                        <Reveal>
                            <Link to="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-50 font-normal hover:text-gray-800 dark:hover:text-gray-400 transition duration-200">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"> 
                                <path fillRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 012.496-.336 9.554 9.554 0 012.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z" clipRule="evenodd" /> 
                            </svg>
                            </Link>
                        </Reveal>
                    </ul>
                    
                    {/* Theme Toggle Button */}
                    <Reveal>
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle Theme"
                            className="flex items-center transition duration-300"
                        >
                            {isDarkMode ? (
                            // Dark Mode SVG
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                                >
                                <path
                                    fill="#eab308"
                                    d="m6.05 4.14l-.39-.39a.993.993 0 0 0-1.4 0l-.01.01a.984.984 0 0 0 0 1.4l.39.39c.39.39 1.01.39 1.4 0l.01-.01a.984.984 0 0 0 0-1.4M3.01 10.5H1.99c-.55 0-.99.44-.99.99v.01c0 .55.44.99.99.99H3c.56.01 1-.43 1-.98v-.01c0-.56-.44-1-.99-1m9-9.95H12c-.56 0-1 .44-1 .99v.96c0 .55.44.99.99.99H12c.56.01 1-.43 1-.98v-.97c0-.55-.44-.99-.99-.99m7.74 3.21c-.39-.39-1.02-.39-1.41-.01l-.39.39a.984.984 0 0 0 0 1.4l.01.01c.39.39 1.02.39 1.4 0l.39-.39a.984.984 0 0 0 0-1.4m-1.81 15.1l.39.39a.996.996 0 1 0 1.41-1.41l-.39-.39a.993.993 0 0 0-1.4 0c-.4.4-.4 1.02-.01 1.41M20 11.49v.01c0 .55.44.99.99.99H22c.55 0 .99-.44.99-.99v-.01c0-.55-.44-.99-.99-.99h-1.01c-.55 0-.99.44-.99.99M12 5.5c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6m-.01 16.95H12c.55 0 .99-.44.99-.99v-.96c0-.55-.44-.99-.99-.99h-.01c-.55 0-.99.44-.99.99v.96c0 .55.44.99.99.99m-7.74-3.21c.39.39 1.02.39 1.41 0l.39-.39a.993.993 0 0 0 0-1.4l-.01-.01a.996.996 0 0 0-1.41 0l-.39.39c-.38.4-.38 1.02.01 1.41"
                                ></path>
                            </svg>
                            ) : (
                            // Light Mode SVG
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                                >
                                <path
                                    fill="#4f46e5"
                                    d="M20.993 13.313a6 6 0 0 1-7.306-7.306a7 7 0 1 0 7.306 7.306"
                                ></path>
                                <path
                                    fill="#4f46e5"
                                    fillRule="evenodd"
                                    d="M4.5 8.25a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-1 0v-1.5a.5.5 0 0 1 .5-.5"
                                    clipRule="evenodd"
                                ></path>
                                <path
                                    fill="#4f46e5"
                                    fillRule="evenodd"
                                    d="M3.25 9.5a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1h-1.5a.5.5 0 0 1-.5-.5M7.5 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5"
                                    clipRule="evenodd"
                                ></path>
                                <path
                                    fill="#4f46e5"
                                    fillRule="evenodd"
                                    d="M6 4.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"
                                    clipRule="evenodd"
                                ></path>
                                </svg>                         
                            )}
                        </button>
                    </Reveal>
                </div>
            </nav>
        </div>
    );
}