import HeroContainer from "@/components/HeroContainer";
import Navbar from "../components/Navbar";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Remarks from "@/components/Remarks";
import Head from "next/head";
import Contact from "@/components/Contact";
import { createContext, useState, useEffect } from "react";
import englishTranslation  from "../public/locales/en/common.json";
import spanishTranslation from "../public/locales/es/common.json"
import portugueseTranslation from "../public/locales/pt/common.json"
import { Translation } from "@/utils/translation";

interface LocaleContext {
  locale: string;
  setLocale: React.Dispatch<React.SetStateAction<string>>;
  translation: Translation | undefined;
  setTranslation: React.Dispatch<React.SetStateAction<Translation | undefined>>
}
const defaultLocale: LocaleContext = {
  locale: "en",
  setLocale: () => {},
  translation: englishTranslation,
  setTranslation: ()=>{}
};

export const LocaleContext = createContext(defaultLocale);

export default function Home() {
  const [locale, setLocale] = useState("en");
  const [translation, setTranslation] = useState<Translation>()
  
  
  

  async function getTranslation(){
    type Translations = { [locale: string]: Translation };
    const t: Translations = {
      en: englishTranslation,
      es: spanishTranslation,
      pt: portugueseTranslation,
    };
    
    const data: Translation = t[locale] || englishTranslation;
    setTranslation(data);
  }

  useEffect(() => {
    getTranslation()
  }, [locale])
  return (
    <>
      <Head>
        <title>Andrés Coronel | Full Stack Dev</title>
        <meta
          name="description"
          content="The portfolio of Andres Coronel, a software engineer and a Full Stack Web dev, expert in reactjs, nextjs, python, data analysis."
        />
        <meta name="author" content="Andrés Coronel" />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, NextJS, Python, SQL"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="relative">
        <LocaleContext.Provider value={{locale, setLocale, translation, setTranslation}}>
          <Navbar />
          <HeroContainer />
          <AboutMe />
          <Skills />
          <Projects />
          <Remarks />
          <Contact />
        </LocaleContext.Provider>
      </main>
    </>
  );
}
