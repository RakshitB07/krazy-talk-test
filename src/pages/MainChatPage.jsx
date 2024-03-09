import React from "react";
import ChatCardComponent from "../components/ChatCardComponent";
import Sidebar from "../components/Sidebar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function MainChatPage() {
  const navigate = useNavigate();
  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem("token");
      if (!token) {
        // Token is not present, redirect to login page
        navigate("/signin");
      }
    };

    // Check for token when component mounts
    checkToken();

    // Set an interval to check for token every 5 minutes
    const intervalId = setInterval(checkToken, 5 * 60 * 1000); // 5 minutes in milliseconds

    // Clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <div>
      <Sidebar />

      <nav className="mb-4 flex justify-between items-center px-4 py-2">
        {/* <img className="w-24" src={coconutTree} alt="coconut-tree-image" /> */}
        <h1 className="font-serif text-6xl">Chat</h1>
        <ul className="flex">
          <a
            onClick={handleLogout}
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
      <div className="flex justify-center items-center">
        <textarea
          id="chat-input"
          placeholder="Type your message..."
          className="bg-gray-800 text-gray-100 mt-4 w-2/5 rounded py-3 px-4 font-medium"
        />

        <button
          type="button"
          className="bg-blue-500 mt-3 hover:bg-blue-600 text-white font-bold w-24 h-12 rounded ml-2"
        >
          ➜ ➜ ➜
        </button>
      </div>
    </div>
  );
}

export default MainChatPage;
