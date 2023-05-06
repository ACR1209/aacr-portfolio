import { firaCodeFont } from "@/utils/fonts";
import React, {useContext} from "react";
import {AiFillGithub} from 'react-icons/ai'
import Proyect, { Proyect  as ProyectType} from "./Proyect";
import { LocaleContext } from "@/pages";


function Projects() {
    const {translation} = useContext(LocaleContext)
    const projects: ProyectType[] = translation?.projects_content!
    
  return (
    <section id="projects" className={`${firaCodeFont.className} bg-offWhite`}>
        <div className="flex flex-col md:flex-row justify-between p-5 items-center">
            <h2 className="text-5xl  lg:text-8xl uppercase font-bold ">
            {translation?.projects_title}
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
                projects?.map((p,i) => (
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
