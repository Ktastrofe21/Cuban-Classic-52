import { useState, useEffect } from "react";
import CloseMenu from "../icons/close-menu";

const MenuOverlay = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
    }
  }, [isOpen]);

  return (
    <>
      {/* Botón Hamburguesa */}
      <button
        onClick={() => setIsOpen(true)}
        className={`md:hidden fixed top-8 right-5 z-40 p-2 ${isOpen ? 'invisible' : 'visible'}`}
        aria-label="Abrir menú"
      >
        <div className="space-y-1.5">
          <span className="block w-7 h-0.5 bg-white"></span>
          <span className="block w-7 h-0.5 bg-white"></span>
          <span className="block w-7 h-0.5 bg-white"></span>
        </div>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50">

          <div 
            className="absolute inset-0 bg-indigo-900/30 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />
          

          <div className="absolute top-0 right-0 h-full w-80 bg-gray-500 bg-opacity-50 backdrop-blur-lg  shadow-xl">
        
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 text-white hover:text-emerald-300 transition-colors"
              aria-label="Cerrar menú"
            >
              <CloseMenu className="w-6 h-6" />
            </button>
            

            <nav className="h-full pt-24 pb-10 px-6 overflow-y-auto">
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="group flex items-center px-4 py-5 hover:bg-white/10 transition-all duration-300 border-b border-white/10"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="w-4 h-px  transition-all"></span>
                      <span className="text-white/90 text-lg font-medium group-hover:text-white">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuOverlay;