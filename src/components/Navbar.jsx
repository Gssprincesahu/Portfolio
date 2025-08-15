import React, { useState, useEffect } from 'react'
import logo from '../../public/logo.jpg';
import { RiMenu3Fill } from "react-icons/ri";
import { FaTimes, FaMoon } from "react-icons/fa";
import { LuSunMedium } from "react-icons/lu";


export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [theme, setTheme] = useState("light");

useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? "dark" : "light");
    }
}, []);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    // const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    const element = document.documentElement;
    useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
            document.body.classList.add("dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
            document.body.classList.remove("dark");
        }
    }, [theme]);


    const navItems = (
        <>
            <li><a href="#about">About</a></li>
            <li><a href = "#skills">Skills</a></li>
            <li><a href = "#project">Project</a></li>
            <li><a href = "#contact">Contact</a></li>
        </>
    );
    return (

        <>
            <div className='bg-gray-100 z-50 fixed top-0  max-w-screen-2xl  dark:bg-black dark:text-white w-full left-0 right-0 shadow-md flex  rounded-lg  items-center  '>
                <div className=' h-16 flex items-center w-1/2 font-bold  p-4 space-x-3'>
                    <img src={logo} alt="logo" className='w-14 h-14 rounded-full' />
                    <p className='text-xl font-mono font-extrabold text-blue-800 '>Prince Sahu</p>
                </div>
                <div className='flex flex-row  items-center justify-end w-1/2  '>
                    <label className='flex items-center justify-center cursor-pointer text-2xl sm:mr-10 '>
                        {theme === "dark" ? (
                            <LuSunMedium onClick={() => setTheme("light")} />
                        ) : (
                            <FaMoon onClick={() => setTheme("dark")} />
                        )}
                    </label>
                    <div className='hidden md:flex mr-15 '>
                        <ul className='flex space-x-4 hover:font-semibold'>
                            {navItems}
                        </ul>
                    </div>

                    <div className="md:hidden  px-5">

                        <button onClick={toggleMenu}>
                            {menuOpen ? <FaTimes size={24} /> : <RiMenu3Fill size={24} />}
                            <ul className={`absolute right-0 top-16 bg-gray-100 dark:bg-slate-900 text-black dark:text-white shadow-lg rounded-lg p-4 space-y-2 ${menuOpen ? 'block' : 'hidden'}`}>
                                {navItems}
                            </ul>
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
}
