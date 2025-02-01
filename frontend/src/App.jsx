import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home"
<<<<<<< HEAD
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import UploadProduct from "./pages/UploadProduct";
// import Login from "./pages/Login"
// import Signup from "./pages/Signup"

// import UploadProduct from "./pages/UploadProduct"
=======
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import UploadProduct from "./pages/UploadProduct";

>>>>>>> dc26034039529f4c4e2753877708447ab4707f1e

function App() {
  return (
    <>
<<<<<<< HEAD
{/* <UploadProduct /> */}
{/* <Login /> */}
{/* <Signup /> */}
    {/* <Home /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<UploadProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
   
=======
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/upload" element={<UploadProduct />} />
    </Routes>
  </BrowserRouter>
  
>>>>>>> dc26034039529f4c4e2753877708447ab4707f1e
    </>
  )
}

export default App
