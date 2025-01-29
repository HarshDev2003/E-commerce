import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home"
<<<<<<< HEAD
=======
import { BrowserRouter, Routes, Route } from "react-router";
>>>>>>> dc26034 (Login and Signup Backend)
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import UploadProduct from "./pages/UploadProduct";


<<<<<<< HEAD

function App() {
  return (
    <>


=======
function App() {
  return (
    <>
>>>>>>> dc26034 (Login and Signup Backend)
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/upload" element={<UploadProduct />} />
    </Routes>
  </BrowserRouter>
<<<<<<< HEAD

=======
  
>>>>>>> dc26034 (Login and Signup Backend)
    </>
  )
}

export default App
