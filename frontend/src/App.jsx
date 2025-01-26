import Home from "./pages/Home"
import ProductUploadForm from "./pages/ProductUploadForm"
import UploadProduct from "./pages/UploadProduct"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
function App() {
  return (
    <>

    {/* <Home /> */}
    {/* <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header> */}
    <UploadProduct />
    {/* <ProductUploadForm /> */}
    </>
  )
}

export default App
