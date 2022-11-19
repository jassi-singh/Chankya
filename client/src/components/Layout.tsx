import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";

const Layout = () => {

  const [selectedView, setSelectedView] = useState(0);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 h-screen bg-gray-200 p-6 overflow-y-auto">
        <div className="flex gap-2">
          <button className={"rounded-full p-2 min-w-4 hover:bg-sky-200 " + (selectedView===0 ? "bg-sky-200" : "")} onClick={()=>setSelectedView(0)} >Upcoming</button>
          <button className={"rounded-full p-2 min-w-4 hover:bg-sky-200 " + (selectedView===1 ? "bg-sky-200" : "")} onClick={()=>setSelectedView(1)} >Live</button>
          <button className={"rounded-full p-2 min-w-4 hover:bg-sky-200 " + (selectedView===2 ? "bg-sky-200" : "")} onClick={()=>setSelectedView(2)} >Past</button>
        </div>
        <div className="w-full grid items-center py-4">
          <Outlet />
        </div>
      </div>

    </div>
  );
};

export default Layout;
