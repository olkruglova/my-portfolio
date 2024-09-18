import { useContext, useEffect, useState } from "react";
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { ThemeContext } from "../providers/ThemeContext";
import { useTranslation } from "react-i18next";
import useDevice from "../hooks/useDevice";
import Navbar from "./Navbar";

function Toolbar() {
  const { i18n } = useTranslation();
  const languages = [
    { name: "en", title: "EN" },
    { name: "pl", title: "PL" }
  ];
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);
  const isMobile = useDevice("mobile");
  const isTablet = useDevice("tablet");
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const themeSwitch = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setCurrentLanguage(lng);
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);

  return (
    <div className={`flex align-middle ${isMobile || isTablet ? "justify-between" : "justify-end"}`}>
      {(isMobile || isTablet) && (
        <Bars3Icon
          className="dark:text-light-blue text-dark-blue size-8 cursor-pointer"
          onClick={() => setIsMenuOpened(true)}
        />
      )}
      <ul className="flex flex-row text-light-blue-500 justify-end mb-10">
        <li className="items-center w-11 mr-3">
          <div
            className="toggle w-11 h-6 relative rounded-full bg-transparent border-2 border-dark-blue dark:border-light-blue cursor-pointer"
            onClick={() => themeSwitch()}
          >
            <div
              className={`toggle-dot w-3 h-3 absolute ${
                isDarkTheme
                  ? "left-1 -translate-x-0.5 transition-all duration-300 ease-in-out"
                  : "right-1 -translate-x-[-0.125rem] transition-all duration-300 ease-in-out"
              } top-1/2 -translate-y-1/2 rounded-full bg-dark-blue-500`}
            ></div>
            <div
              className={`toggle-icon w-3 h-3 absolute ${
                isDarkTheme
                  ? "right-0.5 -translate-x-1/4 transition-all duration-300 ease-in-out"
                  : "left-1/4 -translate-x-1/2 transition-all duration-300 ease-in-out"
              } top-1/2 -translate-y-1/2`}
            >
              {isDarkTheme ? (
                <MoonIcon className="text-light-blue size-3" />
              ) : (
                <SunIcon className="text-dark-blue dark:text-light-blue size-3" />
              )}
            </div>
          </div>
        </li>
        <li className="items-center w-16">
          {languages.map((language, idx) => (
            <span
              key={`${idx}-${language}`}
              className={`${
                currentLanguage === language.name ? "font-bold" : ""
              } pl-1 text-dark dark:text-light-blue-400 hover:text-dark-blue-500 hover:dark:text-light-blue hover:font-bold items-center mr-2 cursor-pointer transition-all duration-300 ease-in-out`}
              onClick={() => changeLanguage(language.name)}
            >
              {language.title}
            </span>
          ))}
        </li>
      </ul>
      <div
        className={`flex justify-between w-full h-auto absolute top-0 left-0 px-24 py-20 z-50 dark:bg-dark bg-white shadow-xl transition-all duration-300 ease-in-out ${
          isMenuOpened ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
        }`}
        style={{
          transformOrigin: "top"
        }}
      >
        <Navbar callback={() => setIsMenuOpened(false)} />
        <XMarkIcon
          className="dark:text-light-blue text-dark-blue size-8 cursor-pointer"
          onClick={() => setIsMenuOpened(false)}
        />
      </div>
    </div>
  );
}

export default Toolbar;
