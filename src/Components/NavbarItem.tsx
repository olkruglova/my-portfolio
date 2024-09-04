import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavbarItem({ item }: any) {
  const { name, url } = item;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseOut={() => setIsHovered(false)}>
      <NavLink to={url || "/"}>
        {({ isActive }) => (
          <div
            className={`flex flex-row items-center  mb-3 cursor-pointer ${
              isActive
                ? "text-salmon-dark hover:text-salmon-dark dark:text-salmon-100 hover:dark:text-salmon-100 font-bold transition-all duration-300 ease-in-out"
                : "text-dark-blue hover:text-dark-blue dark:text-light-blue-500 hover:dark:text-light-blue hover:font-bold transition-all duration-300 ease-in-out"
            }`}
          >
            {isActive ? (
              <div className="flex flex-row items-center">
                <div className="bg-salmon-dark dark:bg-salmon-100 rounded-lg w-px h-16 animate-squizz-y"></div>
                <div className="bg-salmon-dark dark:bg-salmon-100 rounded-lg w-0 h-px opacity-0 animate-appearance-x"></div>
              </div>
            ) : (
              <div className="flex flex-row items-center">
                <div
                  className={`${
                    isHovered || isActive ? "bg-light-blue" : "bg-light-blue-500 font-bold"
                  } rounded-lg w-px h-16 flex flex-row items-center opacity-0 animate-appearance-y`}
                ></div>
                <div className="bg-light-blue rounded-lg w-0 h-px opacity-0 animate-reverse-appearance-x"></div>
              </div>
            )}

            <div className="ml-3">{name}</div>
          </div>
        )}
      </NavLink>
    </div>
  );
}

export default NavbarItem;
