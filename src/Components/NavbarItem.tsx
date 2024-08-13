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
            className={`flex flex-row items-center hover:text-light-blue mb-3 cursor-pointer ${
              isActive ? "text-light-blue" : "text-light-blue-500"
            }`}
          >
            {isActive ? (
              <div className="flex flex-row items-center">
                <div className="bg-light-blue rounded-lg w-0.5 h-16 animate-squizz"></div>
                <div className="bg-light-blue rounded-lg w-16 h-0.5 opacity-0 animate-appearance-x"></div>
                {/* <div className="bg-light-blue rounded-full w-1.5 h-0.5 opacity-0 animate-appearance-x ml-2"></div>
                <div className="bg-light-blue rounded-full w-1 h-0.5 opacity-0 animate-appearance-x ml-2"></div>
                <div className="bg-light-blue rounded-full w-0.5 h-0.5 opacity-0 animate-appearance-x ml-2"></div> */}
              </div>
            ) : (
              <div
                className={`${
                  isHovered || isActive ? "bg-light-blue" : "bg-light-blue-500"
                } rounded-lg w-0.5 h-16 flex flex-row items-center opacity-0 animate-appearance-y`}
              ></div>
            )}

            <div className={`${isActive ? "ml-4" : "ml-2"}`}>{name}</div>
          </div>
        )}
      </NavLink>
    </li>
  );
}

export default NavbarItem;
