import React, { useState } from "react";
import axios from "axios";

function SigninPage() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setError("");
  };

  const handleSignIn = async () => {
    const { username, password } = formData;

    try {
      const response = await axios.post("http://localhost:8080/login", {
        username,
        password,
      });
      console.log("Login successful");
      // Handle successful login (e.g., redirect to another page)
    } catch (error) {
      if (error.response.status === 404) {
        setError("Username not found");
      } else if (error.response.status === 401) {
        setError("Invalid password");
      } else {
        setError("An error occurred. Please try again later.");
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
              placeholder="******************"
              value={formData.password}
              onChange={handleInputChange}
            />
            {error && <p className="text-red-500 text-xs italic">{error}</p>}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-orange-500 hover:text-orange-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SigninPage;
