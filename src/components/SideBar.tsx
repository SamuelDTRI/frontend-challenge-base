import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Sidebar = (props) => {
  const genres = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "History",
    "Horror",
    "Music",
    "Mystery",
    "Sci-Fi",
    "Thriller",
  ];

  return (
    <aside className="w-full h-full bg-[#262626] text-white p-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Search</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Keywords"
            className="w-full p-2 rounded-md bg-[#1c1c1c] text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-yellow-500 pr-10"
          />
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute top-1/2 right-3 transform -translate-y-1/2" />
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Genres</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder=""
            className="w-full bg-[#1c1c1c] border-b border-white text-white placeholder-gray-400 focus:outline-none"
          />
        </div>
        <div className="bg-[#1c1c1c] p-4 max-h-96 overflow-y-scroll scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent">
          <ul className="space-y-2">
            {genres.map(
              (
                genre, //mapear de nuevo (debuggeo) no funciona bien.
              ) => (
                <li
                  key={genre}
                  className="cursor-pointer p-2 hover:bg-[#454545] transition"
                >
                  {genre}
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
