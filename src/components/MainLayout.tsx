import React from "react";
import Sidebar from "./Sidebar";
import CardList from "./CardList";
// --aca es el error.
const MainLayout = () => {
  console.log("Renderiza dos veces");
  return (
    <div className="flex flex-col sm:flex-row bg-[#262626] min-h-screen">
      <aside className="w-full sm:w-1/2 h-auto sm:h-full bg-[#262626]">
        <Sidebar />
      </aside>
      <main className="w-full sm:w-2/1 h-auto sm:h-full">
        <CardList />
        {/* (debuggeo) */}
      </main>
    </div>
  );
};

export default MainLayout;
