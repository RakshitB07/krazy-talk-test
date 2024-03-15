import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import SignupPage from "./pages/SignupPage.jsx";
import SigninPage from "./pages/SigninPage.jsx";
import MainChatPage from "./pages/MainChatPage.jsx";
import ChatRoomPage from "./pages/ChatRoomPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/Signup",
        element: <SignupPage/>,
    },
    {
        path: "/Signin",
        element: <SigninPage/>,
    },
    {
        path: "/MainChat",
        element: <MainChatPage/>,
    },
    {
        path: "/chat/:roomName",
        element: <ChatRoomPage/>,
    }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
