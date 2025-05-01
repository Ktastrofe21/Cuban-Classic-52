import {  useState } from "react";
import CloseMenu from "../icons/close-menu";
import OpenMenu from "../icons/open-menu";



const MenuOverlay = ({ links }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);


  const handlerChange = () => {
    const valor = navbarOpen;
    setNavbarOpen(!valor);
  };

  const closeModal = (e) => {
    if (e.target.id === "close") {
      setNavbarOpen(false);
    }
  };

  return (
    <div className="mobile-menu block md:hidden">
      {navbarOpen ? (
        <button
          onClick={handlerChange}
          className="flex items-center p-2 bg-[#20202091] rounded-lg"
        >
          <CloseMenu className='w-10 h-10 fill-palete-blue-light'/>
        </button>
      ) : (
        <button
          onClick={handlerChange}
          className="flex items-center p-2 bg-[#20202091] rounded-lg"
        >
          <OpenMenu className='w-10 h-10 fill-palete-blue-light'/>
        </button>
      )}
      <div>
        {navbarOpen ? (
          <div
            id="close"
            className=" fixed transition-all duration-75 delay-75  inset-0   cursor-pointer flex items-start mt-[18%] mr-[4%] justify-center h-screen z-[100]"
            onClick={closeModal}
          >
             <div className=" w-[95%]  fixed  inset-0 mt-[15%] left-[2%] " >
           <ul className="font-medium flex flex-col py-5 mt-4 rounded-lg bg-palete-blue-dark ">
                    <li>
                        {
                            links.map(link =>(
                            <a href={link.href} 
                            id="close"
                            key={link.name}
                            className="block py-2 px-3 text-white md:p-0 dark:text-white text-center">
                                {link.name}
                            </a>
                            ))
                        }
                    </li>
                  
                </ul>
          </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MenuOverlay;
