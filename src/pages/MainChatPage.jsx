import React, {useEffect, useState} from "react";
import ChatCardComponent from "../components/ChatCardComponent";
import Sidebar from "../components/Sidebar";
import {useNavigate} from "react-router-dom";
import userData from "../data/hashedUserData.json";
import axios from "axios";
import {format} from 'date-fns';

function MainChatPage() {
    const navigate = useNavigate();
    const username = localStorage.getItem("username");
    const currentUserData = userData.find((user) => user.username === username);
    const randomProfileImg = "https://thispersondoesnotexist.com/";
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [checkingToken, setCheckingToken] = useState(false);

    useEffect(() => {
        const checkToken = () => {
            const token = localStorage.getItem("token");
            if (!token) {
                // Token is not present, redirect to login page
                navigate("/signin");
            }
        };

        checkToken();

        // Fetch messages from the backend
        fetchMessages();

        // Set checkingToken to true to indicate that the token is being checked
        setCheckingToken(true);
    }, [navigate]);

    useEffect(() => {
        if (checkingToken) {
            // Set an interval to check for token every 5 minutes
            const intervalId = setInterval(() => {
                const token = localStorage.getItem("token");
                if (!token) {
                    navigate("/signin");
                }
            }, 5 * 60 * 1000); // 5 minutes in milliseconds

            // Clear interval when component unmounts or when checkingToken becomes false
            return () => clearInterval(intervalId);
        }
    }, [checkingToken, navigate]);

    const fetchMessages = () => {
        axios
            .get("http://localhost:5020/api/messages")
            .then((response) => {
                if (Array.isArray(response.data)) {
                    setMessages(response.data);
                } else {
                    console.warn("Warning: Expected 'response.data' to be an array but received type " + typeof response.data);
                }
            })
            .catch((error) => console.error("Error fetching messages: ", error));
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/signin");
    };

    const sendMessage = () => {
        axios
            .post("http://localhost:5020/api/messages", {user: username, message: newMessage})
            .then(() => {
                fetchMessages();
            })
            .catch((error) => console.error("Error sending message:", error));

        setNewMessage("");
    };

    return (
        <div>
            <Sidebar/>

            <nav className="mb-4 flex justify-between items-center px-4 py-2">
                <h1 className="font-serif text-6xl">Chat</h1>
                <ul className="flex">
                    <a
                        onClick={handleLogout}
                        className="ml-4 ml-4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded tracking-wide"
                    >
                        Logout
                    </a>
                    {/* Other menu items */}
                </ul>
            </nav>

            {messages.map((message) => (
                <ChatCardComponent
                    key={message._id}
                    profilePicture={randomProfileImg}
                    username={message.user}
                    message={message.message}
                    date={format(new Date(message.date), 'HH:mm dd.MM.yyyy')}
                />
            ))}

            <div className="flex justify-center items-center">
        <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="bg-gray-800 text-gray-100 mt-4 w-2/5 rounded py-3 px-4 font-medium"
        />
                <button
                    onClick={sendMessage}
                    type="button"
                    className="bg-blue-500 mt-3 hover:bg-blue-600 text-white font-bold w-24 h-12 rounded ml-2"
                >
                    Send
                </button>
            </div>
        </div>
    );
}

export default MainChatPage;
