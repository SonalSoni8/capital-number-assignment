import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='container mx-auto'>
            <div className="flex flex-wrap">
                <nav className="flex justify-between bg-[#121829] text-white w-screen relative">
                    <div className="px-5 xl:px-20 py-2 flex w-full items-center justify-between">
                        <Link href="/">
                            <Image
                                height={500}
                                width={500}
                                className="h-12 w-12"
                                src="/logo.png"
                                alt="logo"
                            />
                        </Link>
                        <ul className="hidden md:flex font-semibold text-sm gap-10 text-[#9298A9]">
                            <li>
                                <Link className="hover:text-gray-200" href="#">
                                    Movies
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:text-gray-200" href="#">
                                    TV Shows
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:text-gray-200 flex justify-center items-center gap-2"
                                    href="#"
                                >
                                    Suggest Me
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                        />
                                    </svg>
                                </Link>
                            </li>
                        </ul>

                        {/* mobile view */}
                        <button
                            className="navbar-burger self-center md:hidden"
                            onClick={toggleMenu}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 hover:text-gray-200"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </nav>

                {/* mobile dropdown menu */}
                {isMenuOpen && (
                    <div ref={menuRef} className="absolute top-14 left-0 w-full bg-[#121829] text-white z-50">
                        <ul className="flex flex-col items-center font-semibold text-sm gap-4 py-4 text-[#9298A9]">
                            <li>
                                <Link className="hover:text-gray-200" href="#">
                                    Movies
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:text-gray-200" href="#">
                                    TV Shows
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:text-gray-200 flex justify-center items-center gap-2"
                                    href="#"
                                >
                                    Suggest Me
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                        />
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
