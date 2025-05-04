import { useState, useEffect } from "react";
import CloseMenu from "../icons/close-menu";
import OpenMenu from "../icons/open-menu";

const MenuOverlay = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className={`p-2 ${isOpen ? 'invisible' : 'visible'}`}
        aria-label="Abrir menú"
      >
        <div className="space-y-1.5">
          <span className="block w-7 h-0.5 bg-white/90"></span>
          <span className="block w-7 h-0.5 bg-white/90"></span>
          <span className="block w-7 h-0.5 bg-white/90"></span>
        </div>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm animate-fade-in"
            onClick={() => setIsOpen(false)}
          />
          
          <div className="absolute top-0 right-0 h-full w-80 bg-white/20 backdrop-blur-xl border-l border-white/15 shadow-lg animate-slide-in">
            
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 group"
              aria-label="Cerrar menú"
            >
              <div className="relative w-6 h-6">
                <span className="absolute top-1/2 left-0 w-full h-0.5 bg-white/90 transform -rotate-45 group-hover:bg-emerald-300 transition-colors"></span>
                <span className="absolute top-1/2 left-0 w-full h-0.5 bg-white/90 transform rotate-45 group-hover:bg-emerald-300 transition-colors"></span>
              </div>
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
    </div>
  );
};

export default MenuOverlay;