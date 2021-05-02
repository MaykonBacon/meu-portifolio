import React from "react";
import images from "../bg.png";

export default function Home(){
    return (
        <main>
            <img 
                src={images}
                alt="Leaves" 
                className="absolute object-cover w-full h-full"
            />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">Olá, Eu sou o Maykon Bacon</h1>
            </section>
        </main>
    )
}