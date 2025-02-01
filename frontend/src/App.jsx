import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home"



import Login from "./pages/Login";
import Signup from "./pages/Signup"
import UploadProduct from "./pages/UploadProduct";
import Cart from "./pages/Cart";



function App() {
  return (
    <>

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/upload" element={<UploadProduct />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </BrowserRouter>


    </>
  )
}

export default App
