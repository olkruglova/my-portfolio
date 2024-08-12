import { useState } from "react";
import NavbarItem from "./NavbarItem";

function Navbar() {
  const items = [
    { id: 1, name: "Profile" },
    { id: 2, name: "Projects" },
    { id: 3, name: "Resume" },
    { id: 4, name: "Stay in touch" },
  ];

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <ul>
        {items.map((item) => (
          <NavbarItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
