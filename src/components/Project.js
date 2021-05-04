import React, { useEffect, useState } from "react";
import sanityClient from "../client";

export default function Project(){
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`).then((data) => setProjectData(data))
        .catch(console.error);
    }, []);

    //2XL: ACIMA -1536px
    //XL: 4K -1280px
    //LG: Computador/TV -1024px
    //MD: Tablet -768px
    //SM: Mobile -320a425px
    //block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400
    //relative rounded-lg shadow-xl bg-white p-16
    //text-gray-800 font-bold mb-2 hover:text-red-700 sm:text-xs lg:text-xs
    //grid grid-cols-2
    // bg-green-500 md:bg-red-500 lg:bg-purple-500

    return (
        <main className="bg-green-100 min-h-screen p-12 overflow-y-hidden">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">
                    Meus projetos
                </h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12 cursive">
                    Bem vindo à minha página de projetos!
                </h2>
                <section className="flex flex-col gap-8 sm:grid grid-cols-2">
                    {projectData && projectData.map((project, index) => (
                    <article className="relative rounded-lg shadow-xl bg-white lg:p-12" >
                        <h3 className="text-gray-800 font-bold sm:text-xs md:text-xl lg:text-3xl text-center mb-2">
                            <a 
                                href={project.link}
                                alt={project.title}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {project.title}
                            </a>
                        </h3>
                        <div className="text-gray-500 text-xs">
                            <div>
                                <span className="text-base">
                                    <strong className="font-bold lg:text-xl">Finalizado em:</strong>{" "}
                                    {new Date(project.date).toLocaleDateString()}
                                </span>
                            </div>
                            <div>
                                <span className="text-base">
                                    <strong className="font-bold lg:text-xl">Empresa:</strong>{" "}
                                    {project.place}
                                </span>
                            </div>
                            <div>
                                <span className="text-base">
                                    <strong className="font-bold lg:text-xl">Tipo:</strong>{" "}
                                    {project.projectType}
                                </span>
                            </div>
                            <p className="my-6 text-lg text-gray-700 leading-relaxed">
                                {project.description}
                            </p>
                            <a 
                                href={project.link} 
                                rel="noopener noreferrer" 
                                target="_blank" 
                                className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl"
                            >
                                Veja o projeto{" "}
                                <span role="img" aria-label="right pointer"> 
                                    👉
                                </span>
                            </a>
                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
    )
}
