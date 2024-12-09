import React from "react";
import { HeartIcon } from "@heroicons/react/24/solid";

interface CardProps {
  image: string;
  title: string;
  date: string;
  rating: number;
}
// aca importe para facilitar y delegar su responsabilidad a cada archvio y no osbrecargar un componente con informacion que no es propia de el.
const Card: React.FC<CardProps> = ({ image, title, date, rating }) => {
  return (
    <div className="bg-[#1c1c1c] rounded-xl text-white hover:bg-[#262626] transition-all duration-300 shadow-lg relative overflow-hidden">
      <div className="w-full h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 space-y-4">
        <div>
          <h3 className="text-lg font-semibold truncate">{title}</h3>
          <p className="text-sm text-gray-400">{date}</p>
        </div>
        <div className="flex justify-center items-center gap-x-8">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <p className="text-sm">Rating</p>
            <div className="relative w-12 h-12 rounded-full bg-black border-4 border-green-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">{rating}%</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center space-y-2 cursor-pointer">
            <p className="text-sm">Favorite</p>
            <HeartIcon className="w-10 h-10 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
