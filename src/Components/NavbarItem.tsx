import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavbarItem({ item }: any) {
  const { name, url } = item;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      onMouseEnter={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <NavLink to={url || "/"}>
        {({ isActive }) => (
          <div
            className={`flex flex-row items-center  mb-3 cursor-pointer ${
              isActive
                ? "text-salmon-100 hover:text-salmon-100"
                : "text-light-blue-500 hover:text-light-blue"
            }`}
          >
            {isActive ? (
              <div className="flex flex-row items-center">
                <div className="bg-salmon-100 rounded-lg w-px h-16 animate-squizz-y"></div>
                <div className="bg-salmon-100 rounded-lg w-0 h-px opacity-0 animate-appearance-x"></div>
              </div>
            ) : (
              <div className="flex flex-row items-center">
                <div
                  className={`${
                    isHovered || isActive
                      ? "bg-light-blue"
                      : "bg-light-blue-500"
                  } rounded-lg w-px h-16 flex flex-row items-center opacity-0 animate-appearance-y`}
                ></div>
                <div className="bg-light-blue rounded-lg w-0 h-px opacity-0 animate-reverse-appearance-x"></div>
              </div>
            )}

            <div className="ml-3">{name}</div>
          </div>
        )}
      </NavLink>
    </li>
  );
}

export default NavbarItem;
