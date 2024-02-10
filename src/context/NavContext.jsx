import { createContext, useState } from "react";

const NavContext = createContext();

function NavProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((isOpen) => !isOpen);
  }

  function closeMenu() {
    setIsOpen(false);
    console.log("closes");
  }

  return (
    <NavContext.Provider value={{ isOpen, toggleMenu, closeMenu }}>
      {children}
    </NavContext.Provider>
  );
}

export { NavContext, NavProvider };
