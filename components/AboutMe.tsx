import { LocaleContext } from "@/pages";
import { firaCodeFont } from "@/utils/fonts";
import Image from "next/image";
import React, { useContext } from "react";

function AboutMe() {

  const {translation} = useContext(LocaleContext)
  return (
    <section id="about" className="flex h-min md:flex-row flex-col w-full">
      <div className={`${firaCodeFont.className} h-fit flex-1 md:py-10 md:px-20 px-10 py-10`}>
        <h2
          className='text-8xl w-1/2 uppercase font-bold'
        >
          {translation?.about_me_title}
        </h2>
        <p className="text-justify xl:text-xl xl:mt-5">
          {translation?.about_me_content}
        </p>
      </div>

      <div className="flex-1">
        <Image
          width={2000}
          height={2000}
          src="/photo.png"
          className="h-full w-full object-cover"
          alt="This is a photo of me with a red hair"
        />
      </div>
    </section>
  );
}

export default AboutMe;
