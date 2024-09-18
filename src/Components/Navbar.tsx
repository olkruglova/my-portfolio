import { useEffect, useRef, useState } from "react";
import NavbarItem from "./NavbarItem";
import { useTranslation } from "react-i18next";

interface NavbarItem {
  id: number;
  name: string;
  title: string;
  visible: boolean;
  url: string;
}

interface NavItem {
  profile: string;
  projects: string;
  resume: string;
  getInTouch: string;
}

interface NavbarProps {
  callback?: () => void;
}

function Navbar({ callback }: NavbarProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { i18n, t } = useTranslation();
  const [navbarItems, setNavbarItems] = useState<NavbarItem[]>([]);

  const initializeNavBarItems = () => {
    const navItems = t("navItems", { returnObjects: true }) as NavItem;
    return [
      { id: 1, name: "profile", title: navItems.profile, visible: true, url: "/" },
      { id: 2, name: "projects", title: navItems.projects, visible: true, url: "/projects" },
      { id: 3, name: "resume", title: navItems.resume, visible: true, url: "/resume" },
      { id: 4, name: "getInTouch", title: navItems.getInTouch, visible: true, url: "#footer" }
    ];
  };

  useEffect(() => {
    setNavbarItems(initializeNavBarItems());
  }, [i18n.language]);

  const footer = document.getElementById("footer");

  const handleScrollToFooter = (e: any) => {
    e.preventDefault();
    footer?.scrollIntoView({ behavior: "smooth" });

    if (callback) {
      callback();
    }
  };

  return (
    <ul className="flex flex-col items-start justify-start w-full">
      {navbarItems.map((item: NavbarItem) =>
        item.visible ? (
          <li key={item.id}>
            {item.name === "getInTouch" ? (
              <div
                className={`flex flex-row items-center mb-3 cursor-pointer ${
                  isHovered
                    ? "text-dark-blue dark:text-light-blue font-bold transition-all duration-300 ease-in-out"
                    : "text-dark-blue dark:text-light-blue-500 transition-all duration-300 ease-in-out"
                }`}
                onClick={handleScrollToFooter}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="flex flex-row items-center">
                  <div
                    className={`${
                      isHovered ? "bg-dark-blue dark:bg-light-blue" : "bg-light-blue-500"
                    } rounded-lg w-px h-16 flex flex-row items-center opacity-0 animate-appearance-y`}
                  ></div>
                  <div className="bg-dark-blue dark:bg-light-blue rounded-lg w-0 h-px opacity-0 animate-reverse-appearance-x"></div>
                </div>
                <div className="ml-3">{item.title}</div>
              </div>
            ) : (
              <NavbarItem key={item.id} item={item} callback={callback} />
            )}
          </li>
        ) : null
      )}
    </ul>
  );
}

export default Navbar;
