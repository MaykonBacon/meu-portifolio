import React, { useState, useEffect } from "react";
import sanityClient from "../client";
//import bg from "../bgb.jpg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source)
}

export default function About(){
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`)
        .then((data) => setAuthor(data[1]))
        .catch(console.error);
    }, []);
    
    if(!author) return <div>Carregando...</div>
    //2XL: ACIMA -1536px
    //XL: 4K -1280px
    //LG: Computador/TV -1024px
    //MD: Tablet -768px
    //SM: Mobile -320a425px
    //w-800 h-1280
    /*<img 
    src={bg} 
    alt="Background"
    className="absolute w-full"
/>*/

    return (
        <main className="bg-green-100 min-h-screen relative overflow-y-hidden">
            <div className="p-12 lg:pt-48 container mx-auto relative">
                <section className="bg-green-800 rounded-lg shadow-2xl xl:flex p-20">
                    <img 
                        src={urlFor(author.authorImage).url()}
                        alt={author.name}
                        className="rounded sm:w-400 sm:h-640 mr-8"
                    />
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-green-300 mb-4 lg:mt-128">
                            Olá. Eu sou a {" "}
                            <span className="text-green-100">
                                {author.name}
                            </span>
                        </h1>
                        <div className="prose lg:prose-xl text-white">
                            <BlockContent 
                                blocks={author.bio} 
                                projectId="hhg2u1s5"
                                dataset="production"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}