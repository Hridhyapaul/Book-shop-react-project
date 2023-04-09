import React, { useState } from 'react';
import { BoltIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className='bg-gray-100 px-5 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl '>
            <div className='flex items-center justify-between'>
                <Link to='/' className='inline-flex items-center'>
                    <BoltIcon className="h-6 w-6 text-blue-500" />
                    <span className='text-xl font-bold ml-2 tracking-wide text-gray-800'>nextPage</span>
                </Link>

                <ul className='lg:flex items-center space-x-8 hidden font-semibold'>
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='books'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            Books
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='about'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            About
                        </NavLink>
                    </li>
                </ul>

                {/* Mobile Navbar section */}

                <div className='lg:hidden'>
                    <button
                        aria-label='Open Menu'
                        title='Open Menu'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <Bars3BottomRightIcon className="h-6 w-6 text-blue-500" />
                    </button>
                    {isMenuOpen && (
                        <div className='absolute duration-500 top-0 left-0 w-full'>
                            <div className='p-5 bg-gray-100 border rounded shadow-sm'>
                                <div className='flex items-center justify-between mb-4'>
                                    <div>
                                        <Link to='/' className='inline-flex items-center'>
                                            <BoltIcon className='h-6 w-6 text-blue-500' />
                                            <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                                                nextPage
                                            </span>
                                        </Link>
                                    </div>
                                    <div>
                                        <button
                                            aria-label='Close Menu'
                                            title='Close Menu'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <XMarkIcon className='w-5 text-gray-600' />
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className='space-y-4'>
                                        <li>
                                            <Link to='/' className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                            >
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to='/books'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                            >
                                                Books
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to='/about'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                            >
                                                About Us
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Header;