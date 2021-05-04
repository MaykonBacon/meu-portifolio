import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ toogle }) => {
    return (
        <nav className="flex justify-between item-center h-12 bg-green-500 relative shadow-sm text-red-100 hover:text-green-800 text-4xl" role="navigation">
            <Link to="/" className="pl-8 font-bold cursive tracking-widest rounded text-red-200 hover:text-green-800">
                LS
            </Link>
            <div className="px-4 cursor-pointer md:hidden" onClick={toogle}>
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor">
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M4 6h16M4 12h16M4 18h16" 
                    />
                </svg>
            </div>
            <div className="pr-8 md:block hidden font-bold cursive tracking-widest">
                <Link className="p-4 rounded text-red-200 hover:text-green-800" to="/">Home</Link>
                <Link className="p-4 rounded text-red-200 hover:text-green-800" to="/post">Posts</Link>
                <Link className="p-4 rounded text-red-200 hover:text-green-800" to="/project">Projetos</Link>
                <Link className="p-4 rounded text-red-200 hover:text-green-800" to="/about">Sobre Mim!</Link>
            </div>
        </nav>
    )
}

export default NavBar;