import { useState } from "react";

function NavbarItem(props: any) {
  const { item } = props;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className="flex flex-row text-light-blue-400 hover:text-light-blue items-center mb-2 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <div
        className={`${
          isHovered ? "bg-light-blue" : "bg-dark-blue-100"
        } opacity-15 rounded-lg w-0.5 h-16 mr-4`}
      ></div>
      {item.name}
    </li>
  );
}

export default NavbarItem;
