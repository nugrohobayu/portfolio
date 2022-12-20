import { Layout } from 'antd';
import React from 'react';

function Navbar(props) {
    return (
        <nav className="bg-mint-secondary border-gray-200 px-2 sm:px-4 py-2 rounded ">
            <div className="container flex flex-wrap items-center justify-center mx-auto">
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                </button>
                <div className="hidden bg-mint-secondary w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col font-serif items-end p-4 mt-4 border border-gray-100 rounded-lg bg-mint-secondary md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                        <li>
                            <a href="#about" className="block py-2 pl-3 pr-4 text-khaky-primary rounded md:bg-transparent md:text-khaky-primary md:p-0 hover:text-gray-800" aria-current="page">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#portfolio" className="block py-2 pl-3 pr-4 text-khaky-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-gray-800 md:p-0 ">
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="#home" className="block font-medium text-3xl py-2 pl-3 pr-4 text-khaky-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-gray-800 md:p-0 ">
                                Bayu
                            </a>
                        </li>
                        <li>
                            <a href="#article" className="block py-2 pl-3 pr-4 text-khaky-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-gray-800 md:p-0 ">
                                Articles
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="block py-2 pl-3 pr-4 text-khaky-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-gray-800 md:p-0 ">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;