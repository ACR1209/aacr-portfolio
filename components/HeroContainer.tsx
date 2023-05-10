import { LocaleContext } from "@/pages";
import { firaCodeFont } from "@/utils/fonts";
import Image from "next/image";
import React, {useContext} from "react";
import { Link as ScrollLink } from "react-scroll";



function HeroContainer() {

  const {translation} = useContext(LocaleContext)
  return (
    <section
      id="start"
      className="bg-black text-white flex-col md:flex-row h-screen md:w-full flex justify-end md:justify-normal items-center"
    >
      <div
        className={`${firaCodeFont.className} p-5 pt-32 md:pt-5 w-full md:w-7/12`}
      >
        <div className="text-3xl  md:text-3xl lg:text-[2.5rem] lg:leading-[3rem] xl:text-5xl font-bold">
          <h1>{translation?.main_title1!}</h1>
          <h1>{translation?.main_title2!}</h1>
        </div>
        <p className="text-sm md:text-base xl:text-xl w-9/12">
          {translation?.main_description}
        </p>

        <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
            >
              
          <button className="bg-offWhite hover:text-offWhite text-black hover:bg-blackPortfolio mt-10 transition-all   p-2 font-bold">
            {translation?.contact_me}
          </button>
            </ScrollLink>
      </div>

      <div className="w-full md:w-5/12  relative z-10 bg-grayPortafolio h-1/2 md:h-full md:overflow-y-hidden overflow-hidden">
        <Image
          width={2000}
          height={2000}
          src="/keyboard.png"
          alt="photo of keyboard"
          className="w-full max-w-lg xl:max-w-xl  absolute -bottom-72 md:-bottom-[22rem] -right-10"
          priority
        />
      </div>
    </section>
  );
}

export default HeroContainer;

