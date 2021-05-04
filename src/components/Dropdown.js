import React from 'react';
import {Link} from 'react-router-dom';

const Dropdownn = ({ isOpen, toogle }) => {
    return (
        <div className={
            isOpen ? 
            "grid grid-rows-4 text-center items-center bg-green-600 relative shadow-sm text-red-100 hover:text-green-800 font-bold cursive tracking-widest"
            : "hidden"
            }
            onClick={toogle}
        >
            <Link className="p-4 rounded text-red-200 hover:text-green-800" to="/">Home</Link>
            <Link className="p-4 rounded text-red-200 hover:text-green-800" to="/post">Posts</Link>
            <Link className="p-4 rounded text-red-200 hover:text-green-800" to="/project">Projetos</Link>
            <Link className="p-4 rounded text-red-200 hover:text-green-800" to="/about">Sobre Mim!</Link>
        </div>
    )
}

export default Dropdownn;