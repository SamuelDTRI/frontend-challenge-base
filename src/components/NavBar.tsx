import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-300">QuickBet</div>
            <div className="text-sm font-light text-yellow-500">Movies</div>
          </div>
          <ul className="flex space-x-12">
            <li className="hover:text-yellow-500 cursor-pointer">Popular</li>
            <li className="hover:text-yellow-500 cursor-pointer">Favorites</li>
          </ul>
        </div>
        <div className="bg-yellow-500 w-10 h-10 rounded-full flex items-center justify-center">
          <UserCircleIcon className="h-8 w-8 text-white" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
