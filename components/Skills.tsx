import { firaCodeFont } from "@/utils/fonts";
import React from "react";
import Skill from "./Skill";

type Skill = {
    index: number,
    title: string,
    description: string
}

const skills: Skill[] = [
    {
        index: 1,
        title: "Python",
        description: "My first language (over 4 years of using it), I can build APIs, desktop applications, machine learning and data exploration using it."
    },
    {
        index: 2,
        title: "Next.JS",
        description: "I’m experienced with React and Next.JS to build beautiful websites. I’ve used Prisma to allow for dynamic websites."
    },
    {
        index: 3,
        title: "Tailwind",
        description: "My favorite way of doing styles allowing for quick css work. I’ve also used Standard CSS, Styled Components, Bootstrap and SASS. "
    },
    {
        index: 4,
        title: "Design",
        description: "I’ve work as a designer for 3 years, allowing to spread information and ideas through visual components. Experience with Figma, Adobe Illustrator and Adobe Photoshop."
    },
    {
        index: 5,
        title: "Openess",
        description: "I'm an open individual that can learn whatever is needed to solve a problem. Giving it all to accomplish whatever I set my mind to."
    },
    {
        index: 6,
        title: "Communication",
        description: "I'm able to express complex ideas in simple words. I can also speak English, Spanish and Portuguese."
    }
]




function Skills() {
  return (
    <div id='skills' className={`${firaCodeFont.className}  flex flex-col w-full`}>
      <div className="flex justify-end md:items-end md:bg-blackPortfolio">
        <h2 className="text-5xl  lg:text-8xl w-full md:w-1/3 text-right p-5 bg-black text-offWhite uppercase font-bold md:-mb-8">
          Top Skills
        </h2>
      </div>

      <div className="flex flex-wrap w-full bg-black text-offWhite">
        {
            skills.map((s,i)=>(
                <Skill key={`p-${i}`} {...s}/>
            ))
        }
      </div>

    </div>
  );
}

export default Skills;
