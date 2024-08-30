import { useContext } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { ThemeContext } from "../providers/ThemeContext";

function Toolbar() {
  const languages = ["EN", "PL"];
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);

  const themeSwitch = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ul className="flex flex-row text-light-blue-500 justify-end mb-10">
      <li className="items-center mr-3">
        <div
          className="toggle w-11 h-6 relative rounded-full bg-transparent border-2 border-light-blue cursor-pointer"
          onClick={() => themeSwitch()}
        >
          <div
            className={`toggle-dot w-3 h-3 absolute ${
              isDarkTheme ? "left-1 -translate-x-0.5" : "right-1 -translate-x-[-0.125rem]"
            } top-1/2 -translate-y-1/2 rounded-full bg-dark-blue-500`}
          ></div>
          <div
            className={`toggle-icon w-3 h-3 absolute ${
              isDarkTheme ? "right-0.5 -translate-x-1/4" : "left-1/4 -translate-x-1/2"
            } top-1/2 -translate-y-1/2`}
          >
            {isDarkTheme ? (
              <MoonIcon className="text-light-blue size-3" />
            ) : (
              <SunIcon className="text-light-blue size-3" />
            )}
          </div>
        </div>
      </li>
      <li className="items-center">
        {languages.map((language, idx) => (
          <span
            key={`${idx}-${language}`}
            className="text-dark dark:text-light-blue-400 hover:text-dark-blue-500 hover:dark:text-light-blue items-center mr-2 cursor-pointer"
          >
            {language}
          </span>
        ))}
      </li>
    </ul>
  );
}

export default Toolbar;
