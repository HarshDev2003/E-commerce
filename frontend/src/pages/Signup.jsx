

const Signup = () => {
    return (
      <div className="flex flex-col md:flex-row h-screen">
        {/* Right Section */}
        <div className="hidden md:flex md:w-1/2 justify-center items-center bg-gray-100">
          <img
            src="Sign-img/6356905.jpg"
            alt="Illustration"
            className="max-w-full h-auto"
          />
        </div>
        {/* Left Section */}
        <div className="md:w-1/2 flex flex-col justify-center items-center p-6 md:p-12 bg-white">
          <h2 className="text-3xl font-bold mb-2">WELCOME BACK</h2>
          <p className="text-gray-600 mb-6">Welcome back! Please enter your details.</p>
  
          <form className="w-full max-w-sm">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                placeholder="**********"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
              />
            </div>
            <div className="flex justify-between items-center mb-6">
              <div>
                <input type="checkbox" className="mr-2" />
                <span className="text-gray-600">Remember me</span>
              </div>
              <a href="#" className="text-blue-600 text-sm">Forgot password?</a>
            </div>
            <button className="w-full bg-red-500 text-white p-3 rounded-lg font-semibold">Sign in</button>
            <button className="w-full flex items-center justify-center border mt-4 p-3 rounded-lg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Sign in with Google
            </button>
          </form>
  
          <p className="mt-4 text-gray-600">
            Don’t have an account? <a href="#" className="text-red-500 font-semibold">Sign up for free!</a>
          </p>
        </div>
  
       
      </div>
    );
  };
  
  export default Signup;
  