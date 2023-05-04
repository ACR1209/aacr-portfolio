import { firaCodeFont } from "@/utils/fonts";
import Image from "next/image";
import React from "react";

function AboutMe() {
  return (
    <section id="about" className="flex md:flex-row flex-col w-full">
      <div className={`${firaCodeFont.className} flex-1 md:py-10 md:px-20 px-10 py-10`}>
        <h2
          className='text-8xl w-1/2 uppercase font-bold'
        >
          About Me.
        </h2>
        <p className="text-justify xl:text-xl xl:mt-5">
          I am a software developer who is deeply passionate about learning,
          expanding my network, and constantly improving. Although I am
          currently residing in Ecuador, I was born in Venezuela and I’m half
          Portuguese. My goal is to consistently strive for personal growth and
          ensure that I am a better version of myself by the end of each day. I
          maintain an open mindset, always eager to acquire new knowledge and
          skills.
        </p>
      </div>

      <div className="flex-1">
        <Image
          width={2000}
          height={2000}
          src="/myPhoto.png"
          className="w-full h-full"
          alt="This is a photo of me with a red hair"
        />
      </div>
    </section>
  );
}

export default AboutMe;
