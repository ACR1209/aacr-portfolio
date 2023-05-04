import { firaCodeFont } from "@/utils/fonts";
import React from "react";
import {AiFillGithub} from 'react-icons/ai'
import Proyect, { Proyect  as ProyectType} from "./Proyect";

const projects: ProyectType[] = [
    {
        title: "Webnews landing page",
        imgSrc: '/website1.png',
        liveSrc: 'https://news-page-frontend-mentor.vercel.app',
        description: 'This is one of my Frontend Mentor Challenges. Is a simple static website to test my layout abilities.'
    },
    {
        title: "Courses Informational page",
        imgSrc: '/website2.png',
        liveSrc: 'https://praxis-web-page.vercel.app',
        description: 'I built and deployed a NextJS app using prisma for a courses informational page.'
    },
]

function Projects() {
  return (
    <section id="projects" className={`${firaCodeFont.className} bg-offWhite`}>
        <div className="flex flex-col md:flex-row justify-between p-5 items-center">
            <h2 className="text-5xl  lg:text-8xl uppercase font-bold ">
                Projects.
            </h2>
            <div className="flex justify-center items-center">
                <p className="mr-5">want to see more?</p>
            
                <a
                href="https://github.com/ACR1209"
                target="_blank"
                className="hover:scale-110 transition-all"
                >

                <AiFillGithub className="text-5xl"/>    
                </a>
            </div>
        </div>


        <div className="p-5 flex flex-wrap">
            {
                projects.map((p,i) => (
                    <Proyect
                        key={`p-${i}`}
                        {...p}
                    />
                ))
            }
        </div>
    </section>
  );
}

export default Projects;
