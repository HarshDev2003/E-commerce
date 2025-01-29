<<<<<<< HEAD

import { useState } from "react";
import { Link } from "react-router";
import axios from "axios";
=======
import { useState } from "react";
import { Link } from "react-router";
import axios from "axios";

>>>>>>> dc26034 (Login and Signup Backend)
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      // localStorage.setItem("token", response.data.token);
      console.log("Login Successful:", response.data);

      // Redirect to dashboard after login
      window.location.href = "/dashboard";
    } catch (error) {
      setError(error.response?.data?.error || "Login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Section */}
      <div className="md:w-1/2 flex flex-col justify-center items-center p-6 md:p-12 bg-white">
        <h2 className="text-3xl font-bold mb-2">WELCOME BACK</h2>
        <p className="text-gray-600 mb-6">Welcome back! Please enter your details.</p>

        <form onSubmit={handleLogin} className="w-full max-w-sm">
          {error && <p className="text-red-500 mb-4">{error}</p>}

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              placeholder="**********"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-between items-center mb-6">
            <div>
              <input type="checkbox" className="mr-2" />
              <span className="text-gray-600">Remember me</span>
            </div>
            <a href="#" className="text-blue-600 text-sm">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white p-3 rounded-lg font-semibold"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>

          <button className="w-full flex items-center justify-center border mt-4 p-3 rounded-lg">
            <img src="/Sign-img/Google.png" alt="Google" className="w-9 h-9 mr-2" />
            Sign in with Google
          </button>
        </form>

        <p className="mt-4 text-gray-600">
          Don’t have an account? <Link to="/signup" className="text-red-500 font-semibold">Sign up for free!</Link>
        </p>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex md:w-1/2 justify-center items-center bg-gray-100">
        <img src="Sign-img/6356905.jpg" alt="Illustration" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default Login;
