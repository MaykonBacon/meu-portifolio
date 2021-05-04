import React from "react";
//import images from "../bg.png";

export default function Home(){
    return (
        <main className="overflow-y-hidden">
           <div className="bg-green-100 h-screen flex flex-col justify-center items-center">
               <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl text-black-100 font-bold cursive leading-none lg:leading-snug home-name">
                   Olá, eu sou a Larissa Souza
               </h1>
           </div>
        </main>
    )
}