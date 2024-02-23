import React from "react";
import hashSvg from "../assets/hash-svgrepo-com.svg";

function Sidebar() {
  return (
    <aside
      id="default-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
        <h1 className="text-2xl mb-4 text-center font-black bg-orange-500 text-white border border-stone-50 rounded border-solid p-2">
          Social Clubs
        </h1>

        <ul className="space-y-2 font-medium">
          <li>
            <a
              href="#"
              className="flex items-center p-2  rounded-lg text-white  hover:bg-gray-700 group"
            >
              <img
                src={hashSvg}
                className="w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white"
                alt="Dashboard"
              />
              <span className="ms-3 font-bold">Technology</span>
            </a>
          </li>
          {/* Repeat the above pattern for more categories */}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
