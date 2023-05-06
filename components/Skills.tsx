import { firaCodeFont } from "@/utils/fonts";
import React, {useContext} from "react";
import Skill from "./Skill";
import { LocaleContext } from "@/pages";

type Skill = {
    index: number,
    title: string,
    description: string
}





function Skills() {
  const {locale,translation} = useContext(LocaleContext)
  const skills: Skill[] = translation?.skills_content!

  return (
    <div id='skills' className={`${firaCodeFont.className}  flex flex-col w-full`}>
      <div className="flex justify-end md:items-end md:bg-blackPortfolio">
        <h2 className={`text-5xl lg:text-8xl w-full ${locale != "en" ? "md:w-1/2" : "md:w-1/3"}  text-right p-5 bg-black text-offWhite uppercase font-bold md:-mb-8`}>
          {translation?.skills_title}
        </h2>
      </div>

      <div className="flex flex-wrap w-full bg-black text-offWhite">
        {
            skills?.map((s,i)=>(
                <Skill key={`s-${i}`} {...s}/>
            ))
        }
      </div>

    </div>
  );
}

export default Skills;
