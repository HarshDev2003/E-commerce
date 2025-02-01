
import { Link } from "react-router";
const Signup = () => {
    return (
        <div className="flex flex-col md:flex-row h-screen">
        {/* Right Section */}
        <div className="hidden md:flex md:w-1/2 justify-center items-center bg-gray-100">
          <img
            src="Sign-img/4058421.jpg"
            alt="Illustration"
            className="max-w-full h-auto"
          />
        </div>
        {/* Left Section */}
        <div className="md:w-1/2 flex flex-col justify-center items-center p-6 md:p-12 bg-white">
          <h2 className="text-3xl font-bold mb-2">CREATE AN ACCOUNT</h2>
          <p className="text-gray-600 mb-6">Sign up to get started with your account.</p>
  
          <form className="w-full max-w-sm">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
              />
            </div>
            {/* <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
              />
            </div> */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                placeholder="**********"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
              />
            </div>
            
            <button className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold">Sign Up</button>
            <button className="w-full flex items-center justify-center border mt-4 p-3 rounded-lg">
              <img
                src="/Sign-img/Google.png"
                alt="Google"
                className="w-9 h-9 mr-2"
              />
              Sign up with Google
            </button>
          </form>
  
          <Link to = "/login" className="mt-4 text-gray-600">
            Already have an account? <a href="#" className="text-blue-500 font-semibold">Sign in here!</a>
          </Link>
        </div>
      </div>
    );
  };
  
  export default Signup;
  