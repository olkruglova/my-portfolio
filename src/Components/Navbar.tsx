import NavbarItem from "./NavbarItem";

function Navbar() {
  const items = [
    { id: 1, name: "Profile", visible: true, url: "/" },
    { id: 2, name: "Projects", visible: true, url: "/projects" },
    { id: 3, name: "Resume", visible: true, url: "/resume" },
    { id: 4, name: "Stay in touch", visible: true, url: "/contacts" },
  ];

  return (
    <ul className="flex flex-col items-start justify-start w-full">
      {items.map((item) =>
        item.visible ? <NavbarItem key={item.id} item={item} /> : null
      )}
    </ul>
  );
}

export default Navbar;
