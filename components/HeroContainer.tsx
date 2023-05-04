import { firaCodeFont } from "@/utils/fonts";
import Image from "next/image";
import React , {useRef, useEffect} from "react";

function HeroContainer() {

  return (
    <section id='start' className="bg-black text-white flex-col md:flex-row h-screen md:w-full flex justify-end md:justify-normal items-center">
      <div className={`${firaCodeFont.className} p-5 w-full md:w-7/12`}>
        <div className="text-xl md:text-3xl lg:text-[2.5rem] lg:leading-[3rem] xl:text-5xl whitespace-nowrap font-bold">
          <h1>Hello. I'm Andrés Coronel.</h1>
          <h1>A Full Stack Web Developer</h1>
        </div>
        <p className="text-sm md:text-base xl:text-xl w-9/12">
          Enthusiastic software engineer, with an eye to detail and the ability
          to build what you want. I'm also a designer.
        </p>
      </div>

      <div className="w-full md:w-5/12  relative z-10 bg-grayPortafolio h-1/2 md:h-full md:overflow-y-hidden overflow-hidden">
            <Image
            width={2000}
            height={2000}
            src='/keyboard.png'
            alt="photo of keyboard"
            className="w-full max-w-lg   absolute -bottom-72 md:-bottom-[22rem] -right-10"
            />
      </div>
    </section>
  );
}

export default HeroContainer;
