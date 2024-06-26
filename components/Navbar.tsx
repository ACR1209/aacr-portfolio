import { adaminaFont, firaCodeFont } from "@/utils/fonts";
import React, { useEffect, useState, useContext } from "react";
import Navlink from "./Navlink";
import { AiOutlineDownload, AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link as ScrollLink } from "react-scroll";
import { LocaleContext } from "@/pages";
import Image from "next/image";

const navbarHeight = 80; // Replace with your actual navbar height

function Navbar() {
  const { locale, setLocale, translation } = useContext(LocaleContext);
  const [scroll, setScroll] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  function cycleLocale(): void {
    const locales: string[] = ["en", "es", "pt"];

    const nextLocale: string =
      locales[(locales.indexOf(locale) + 1) % locales.length];

    setLocale(nextLocale);
  }

  return (
    <nav
      className={`${adaminaFont.className} ${
        scroll ? "bg-offWhite" : "text-white "
      }  transition-all z-20 fixed  top-0 items-center p-5 flex justify-between w-full`}
    >
      <ScrollLink
        to="start"
        smooth={true}
        duration={500}
        offset={-navbarHeight}
      >
        <p className="text-5xl cursor-pointer select-none">AC</p>
      </ScrollLink>
      <div className="flex items-center justify-center space-x-5">
        <button
          className={`${firaCodeFont.className} ${
            scroll ? "text-blackPortfolio" : "text-white"
          } text-lg  md:hidden ${
            !showSidebar ? "flex  items-center justify-center" : "hidden"
          }`}
          onClick={() => cycleLocale()}
        >
          <Image
            width={40}
            height={40}
            className="mr-1 h-[30px] w-[30px] "
            src={`/${locale}_icon.png`}
            alt={`${locale} flag`}
          />
          {locale}
        </button>

        <GiHamburgerMenu
          className={`${
            scroll ? "text-blackPortfolio" : "text-white"
          } text-3xl md:hidden ${!showSidebar ? "flex" : "hidden"}`}
          onClick={() => toggleSidebar()}
        />
      </div>
      <div
        className={`${
          showSidebar ? "flex" : "hidden"
        } absolute md:hidden  justify-end top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.7)] z-20`}
      >
        <div className="bg-offWhite relative w-1/2 h-screen">
          <AiOutlineClose
            className="absolute text-4xl top-5 text-blackPortfolio right-5"
            onClick={() => toggleSidebar()}
          />
          <div className={`${firaCodeFont.className} p-5 pt-20 flex flex-col `}>
            <ul className="flex flex-col space-y-5 mb-5  text-black mr-10">
              <Navlink>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-navbarHeight}
                  onClick={() => toggleSidebar()}
                >
                  {translation?.about_me}
                </ScrollLink>
              </Navlink>
              <Navlink>
                <ScrollLink
                  to="skills"
                  smooth={true}
                  duration={500}
                  offset={-navbarHeight}
                  onClick={() => toggleSidebar()}
                >
                  {translation?.skills}
                </ScrollLink>
              </Navlink>
              <Navlink>
                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={500}
                  offset={-navbarHeight}
                  onClick={() => toggleSidebar()}
                >
                  {translation?.projects}
                </ScrollLink>
              </Navlink>
              <Navlink>
                <ScrollLink
                  to="remarks"
                  smooth={true}
                  duration={500}
                  offset={-navbarHeight}
                  onClick={() => toggleSidebar()}
                >
                  {translation?.remarks}
                </ScrollLink>
              </Navlink>
              <Navlink>
                <a
                  href="/AndresCoronel_CV.pdf"
                  className="flex justify-center items-center"
                  download
                  onClick={() => toggleSidebar()}
                >
                  <AiOutlineDownload className="mr-2" />
                  CV
                </a>
              </Navlink>
            </ul>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
              onClick={() => toggleSidebar()}
            >
              <button className="bg-black hover:text-black text-offWhite hover:bg-offWhite transition-all   p-2 font-bold">
                {translation?.contact_me}
              </button>
            </ScrollLink>
          </div>
        </div>
      </div>

      <div className={`${firaCodeFont.className} items-center md:flex hidden `}>
        <ul className="flex space-x-14 mr-10">
          <Navlink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
            >
              {translation?.about_me}
            </ScrollLink>
          </Navlink>
          <Navlink>
            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
            >
              {translation?.skills}
            </ScrollLink>
          </Navlink>
          <Navlink>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
            >
              {translation?.projects}
            </ScrollLink>
          </Navlink>
          <Navlink>
            <ScrollLink
              to="remarks"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
            >
              {translation?.remarks}
            </ScrollLink>
          </Navlink>
          <Navlink>
            <a
              href="/AndresCoronel_CV.pdf"
              className="flex justify-center items-center"
              download
            >
              <AiOutlineDownload className="mr-2" />
              CV
            </a>
          </Navlink>
        </ul>

        <button className="mr-5" onClick={() => cycleLocale()}>
          <Image
            width={40}
            height={40}
            className="h-[30px] w-[30px] "
            src={`/${locale}_icon.png`}
            alt={`${locale} flag`}
          />
          {locale}
        </button>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          offset={-navbarHeight}
        >
          <button
            className={`${
              scroll
                ? "hover:bg-offWhite text-white hover:text-black bg-black"
                : "bg-offWhite hover:text-white text-black hover:bg-black"
            }  transition-all   p-2 font-bold`}
          >
            {translation?.contact_me}
          </button>
        </ScrollLink>
      </div>
    </nav>
  );
}

export default Navbar;
