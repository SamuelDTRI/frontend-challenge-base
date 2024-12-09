import React from "react";
import Card from "./Card";
import movies from "../utils/movies";
import categories from "../utils/categories";
// llamando a la card
const CardList: React.FC = () => {
  console.log("si llega la info de mi", Card); //debuggeo
  return (
    <div className="p-6 bg-[#424242] min-h-screen space-y-10">
      {categories.map((category) => (
        <div key={category.id} className="space-y-4">
          <h2 className="text-2xl font-bold text-white">{category.title}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {movies
              .filter((movie) => movie.category === category.title) // aca van... borrar luego comentario de (debuggeo).
              .map((movie) => (
                <Card
                  key={movie.id}
                  image={movie.image}
                  title={movie.title}
                  date={movie.date}
                  rating={movie.rating}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
