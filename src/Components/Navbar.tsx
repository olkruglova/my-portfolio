import { useRef, useState } from "react";
import NavbarItem from "./NavbarItem";

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const items = [
    { id: 1, name: "Profile", visible: true, url: "/" },
    { id: 2, name: "Projects", visible: true, url: "/projects" },
    { id: 3, name: "Resume", visible: true, url: "/resume" },
    { id: 4, name: "Get in touch", visible: true, url: "#footer" }
  ];

  const footer = document.getElementById("footer");

  const handleScrollToFooter = (e: any) => {
    e.preventDefault();
    footer?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ul className="flex flex-col items-start justify-start w-full">
      {items.map((item) =>
        item.visible ? (
          <li key={item.id}>
            {item.name === "Get in touch" ? (
              <div
                className={`flex flex-row items-center mb-3 cursor-pointer ${
                  isHovered ? "text-light-blue" : "text-light-blue-500"
                }`}
                onClick={handleScrollToFooter}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="flex flex-row items-center">
                  <div
                    className={`${
                      isHovered ? "bg-light-blue" : "bg-light-blue-500"
                    } rounded-lg w-px h-16 flex flex-row items-center opacity-0 animate-appearance-y`}
                  ></div>
                  <div className="bg-light-blue rounded-lg w-0 h-px opacity-0 animate-reverse-appearance-x"></div>
                </div>
                <div className="ml-3">{item.name}</div>
              </div>
            ) : (
              <NavbarItem key={item.id} item={item} />
            )}
          </li>
        ) : null
      )}
    </ul>
  );
}

export default Navbar;
