import React from "react";
import ChatCardComponent from "./ChatCardComponent";

function MainChatPage() {
  return (
    <div>
      <nav className="mb-4 flex justify-between items-center px-4 py-2">
        {/* <img className="w-24" src={coconutTree} alt="coconut-tree-image" /> */}
        <h1 className="font-serif text-6xl">Chat</h1>
        <ul className="flex">
          <a
            href="#"
            className="ml-4 ml-4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded tracking-wide"
          >
            Logout
          </a>
          <a
            href="#"
            className="ml-4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded tracking-wide"
          >
            Chat
          </a>
          <a
            href="#"
            className="ml-4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded tracking-wide"
          >
            Shop
          </a>
          <a
            href="#"
            className="ml-4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded tracking-wide"
          >
            Music
          </a>
          <a
            href="#"
            className="ml-4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded tracking-wide"
          >
            Video
          </a>
        </ul>
      </nav>
      <ChatCardComponent />
      <ChatCardComponent />
    </div>
  );
}

export default MainChatPage;
