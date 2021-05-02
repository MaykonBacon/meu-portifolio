import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
    return (
        <header className="bg-red-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink
                        to="/"
                        exact
                        activeClassName="text-white"
                        className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/post"
                        activeClassName="text-red-100 bg-red-700"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                    >
                        Posts
                    </NavLink>
                    <NavLink
                        to="/project"
                        activeClassName="text-red-100 bg-red-700"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                    >
                        Projetos
                    </NavLink>
                    <NavLink
                        to="/about"
                        activeClassName="text-red-100 bg-red-700"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                    >
                        Sobre Mim!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon 
                        url="https://www.facebook.com/maykon.bacon" 
                        className="mr-4" 
                        target="_blank" 
                        fgColor="#fff" 
                        style={{ height: 35, width: 35 }} 
                    />
                    <SocialIcon 
                        url="https://www.instagram.com/maykon_bacon/" 
                        className="mr-4" 
                        target="_blank" 
                        fgColor="#fff" 
                        style={{ height: 35, width: 35 }} 
                    />
                    <SocialIcon 
                        url="https://www.linkedin.com/in/maykon-soares-18039514a/" 
                        className="mr-4" 
                        target="_blank" 
                        fgColor="#fff" 
                        style={{ height: 35, width: 35 }} 
                    />
                </div>
            </div>
        </header>
    )
}