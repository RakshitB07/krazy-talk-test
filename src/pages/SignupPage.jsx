import React, { useState } from "react";
import axios from "axios";

function SignupPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loginSuccess, setLoginSuccess] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear error message when user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = formData;

    const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
    const passwordRegex = /^.{6,16}$/;

    const newErrors = {};

    if (!username) {
      newErrors.username = "Username cannot be empty";
    } else if (!usernameRegex.test(username)) {
      newErrors.username =
        "Invalid username. Username must be between 3 to 16 characters.";
    }

    if (!password) {
      newErrors.password = "Password cannot be empty";
    } else if (!passwordRegex.test(password)) {
      newErrors.password = "Password must be between 6 and 16 characters";
    }

    if (Object.keys(newErrors).length === 0) {
      setFormData((prevData) => ({
        ...prevData,
      }));

      try {
        // Check if username already exists
        const response = await axios.post(
          "http://localhost:8080/checkusername",
          {
            username,
          }
        );
        if (response.data.exists) {
          newErrors.username = "Username already exists";
          setErrors(newErrors);
        } else {
          // Username is available, proceed with signup
          await axios.post("http://localhost:8080/signup", {
            username,
            password,
          });
          setLoginSuccess("User created successfully, You can login now!");
          console.log("User created successfully");
        }
      } catch (error) {
        console.error(
          "Error checking username or creating user:",
          error.response.data
        );
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-xs">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
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
            {errors.username && (
              <p className="text-red-500 text-xs italic">{errors.username}</p>
            )}
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
            {errors.password && (
              <p className="text-red-500 text-xs italic">{errors.password}</p>
            )}
            <div className="text-green-500">
              <p>{loginSuccess}</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
