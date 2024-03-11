import React, {useState} from "react";
import axios from "axios";
import {v4 as uuidv4} from "uuid";
import {useNavigate} from "react-router-dom";

function SigninPage() {
    const [formData, setFormData] = useState({username: "", password: ""});
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setError("");
    };

    const handleSignIn = async () => {
        const {username, password} = formData;

        // Input validation
        if (!username || !password) {
            setError("Please fill in all fields");
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:8080/login",
                {
                    username,
                    password,
                },
                {
                    timeout: 10000,
                }
            );
            // Generate a unique token for the session
            const token = uuidv4();

            // Store the token in local storage
            localStorage.setItem("token", token);

            // Store the username in local storage
            localStorage.setItem("username", username);

            // Set the token expiry date/time
            const tokenExpiry = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours in milliseconds
            localStorage.setItem("tokenExpiry", tokenExpiry.toString());

            // Set a timeout to remove the token after 24 hours
            setTimeout(() => {
                localStorage.removeItem("token");
                localStorage.removeItem("tokenExpiry");
            }, 24 * 60 * 60 * 1000);

            // // Set a timeout to remove the token after 15 minutes
            // setTimeout(() => {
            //   localStorage.removeItem("token");
            // }, 30 * 60 * 1000); // 30 minutes in milliseconds

            console.log(token);
            console.log("Login successful");
            // Handle successful login and redirect
            navigate("/mainchat");
        } catch (error) {
            if (error.response) {
                if (error.response.status === 404) {
                    setError("Username not found");
                } else if (error.response.status === 401) {
                    setError("Invalid password");
                } else {
                    setError("An error occurred. Please try again later.");
                }
                if (error.code === "ECONNABORTED") {
                    setError("A timeout occurred. Please try again.");
                }
            } else {
                setError("An error occurred. Please check your network connection.");
                console.error(error);
            }
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-full max-w-xs">
                <form
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSignIn();
                    }}
                >
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="username"
                        >
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            name="password"
                            placeholder="********"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                        {error && <p className="text-red-500 text-xs italic">{error}</p>}
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            onClick={handleSignIn}
                            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Sign In
                        </button>
                        {/* <a
              className="inline-block align-baseline font-bold text-sm text-orange-500 hover:text-orange-800"
              href="#"
            >
              Forgot Password?
            </a> */}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SigninPage;
