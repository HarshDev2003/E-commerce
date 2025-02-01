import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home"
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import UploadProduct from "./pages/UploadProduct";
// import Login from "./pages/Login"
// import Signup from "./pages/Signup"

// import UploadProduct from "./pages/UploadProduct"

function App() {
  return (
    <>
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
   
    </>
  )
}

export default App
