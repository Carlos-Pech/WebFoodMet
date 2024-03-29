import React from "react";
import { Link } from "react-router-dom";
import {
  RiFolderChart2Line,
  RiLogoutBoxRLine,
  RiHome3Line,
  RiRestaurantLine,
  RiArchiveLine,
} from "react-icons/ri";

const Sidebar = () => {
  function handleLogout() {
    localStorage.removeItem("token");
    // redirigir a la página de inicio de sesión o hacer cualquier otra acción necesaria después de cerrar sesión
  }

  return (
    <div className="xl:h-[100vh] overflow-y-scroll fixed xl:static w-full h-full -left-full top-0 bg-secondary-100 p-12 flex flex-col justify-between">
      <div>
        <img src="../../public/foodmet logo2.png" alt="Logo" />
        <h1 className="text-center text-2xl font-bold text-white mb-10">
          FoodMet<span className="text-primary texxt-4xl">.</span>
        </h1>
        <nav className="">
          <Link
            to="/home"
            className=" flex items-center gap-4 py-4 px-4 rounded-lg hover:bg-purple-700 transition-colors"
          >
            <RiHome3Line className="text-primary" />
            Home
          </Link>

          <Link
            to="platillos"
            className=" flex items-center gap-4 py-4 px-4 rounded-lg  hover:bg-purple-700 transition-colors"
          >
            <RiRestaurantLine className="text-primary" />
            Platillos
          </Link>
          <Link
            to="ingredientes"
            className=" flex items-center gap-4 py-4 px-4 rounded-lg hover:bg-purple-700 transition-colors"
          >
            <RiArchiveLine className="text-primary" />
            Ingredientes
          </Link>
          {/* <Link to="/" className=' flex items-center gap-4 py-4 px-4 rounded-lg hover:bg-purple-700 transition-colors'
          >
            <RiFolderChart2Line  className='text-primary'/>Cerrar sesión
          </Link> */}
        </nav>
      </div>
      <nav>
        <button onClick={handleLogout}>
          <button onClick={handleLogout}>
            <Link
              to="/"
              className=" flex items-center gap-4 py-4 px-4 rounded-lg hover:bg-purple-700 transition-colors"
            >
              <RiLogoutBoxRLine className="text-primary" />
              Cerrar sesion
            </Link>
          </button>
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;