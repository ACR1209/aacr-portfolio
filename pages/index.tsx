import HeroContainer from "@/components/HeroContainer";
import Navbar from "../components/Navbar";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Remarks from "@/components/Remarks";
import Head from "next/head";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Andrés Coronel | Full Stack Dev</title>
        <meta
          name="description"
          content="The portfolio of Andres Coronel, a software engineer and a Full Stack Web dev, expert in reactjs, nextjs, python, data analysis."
        />
        <meta name="google-site-verification" content="sbV-4Qu-16ZxBJzM0NM7rSGkxPcmgWlnnUAw2FP3CJ0" />
        <meta name="author" content="Andrés Coronel" />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, NextJS, Python, SQL"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="relative">
        <Navbar />
        <HeroContainer />
        <AboutMe />
        <Skills />
        <Projects />
        <Remarks />
        <Contact />
      </main>
    </>
  );
}
