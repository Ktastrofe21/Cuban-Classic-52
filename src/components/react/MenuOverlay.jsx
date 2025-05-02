import {  useState } from "react";
import CloseMenu from "../icons/close-menu";
import OpenMenu from "../icons/open-menu";



const MenuOverlay = ({ links }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleMenu = () => {
    setNavbarOpen(prev => !prev);
  };

  const closeMenu = (e) => {
    if (e.target.id === "overlay") {
      setNavbarOpen(false);
    }
  };

  return (
    <div className="md:hidden">
      {/* Botón del menú */}
      <button
        onClick={toggleMenu}
        aria-label={navbarOpen ? "Cerrar menú" : "Abrir menú"}
        className="p-2 rounded-lg bg-transparent hover:bg-gray-800/20 transition-colors duration-200"
      >
        {navbarOpen ? (
          <CloseMenu className="w-8 h-8 text-emerald-400/90" />
        ) : (
          <OpenMenu className="w-8 h-8 text-emerald-400/90" />
        )}
      </button>

      {/* Overlay y menú */}
      {navbarOpen && (
        <div
          id="overlay"
          onClick={closeMenu}
          className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm transition-opacity duration-300"
        >
          <div className="absolute top-24 right-4 left-4 bg-white/95 dark:bg-gray-800/95 rounded-lg overflow-hidden animate-fade-in">
            <ul className="flex flex-col divide-y divide-gray-200/50 dark:divide-gray-700/50">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block py-4 px-6 text-gray-800/90 dark:text-gray-100/90 hover:bg-emerald-50/50 dark:hover:bg-gray-700/50 text-center font-medium transition-colors duration-200"
                    onClick={() => setNavbarOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuOverlay;