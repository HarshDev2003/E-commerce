import { NavbarSimple } from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  // Function to add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  if (loading) {
    return <div className="text-center mt-20 text-xl">Loading...</div>;
  }

  return (
    <>
      <NavbarSimple />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg p-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain rounded-md"
              />
              <h2 className="text-xl font-semibold mt-4 text-center">
                {product.name}
              </h2>
              <p className="text-gray-600 mt-2 text-center">
                Rs: {product.price}
              </p>
              <div className="mt-4 flex justify-evenly">
                <button
                  onClick={() => addToCart(product)}
                  className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center py-[0.7em] px-[1.7em] text-[18px] text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 cursor-pointer"
                  type="button"
                >
                  Add to Cart
                </button>
                <button className="text-[#090909] py-[0.7em] px-[1.7em] text-[18px] rounded-lg bg-[#e8e8e8] cursor-pointer border border-[#e8e8e8] transition-all duration-300 shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] active:text-[#666] active:shadow-inset-[4px_4px_12px_#c5c5c5,-4px_-4px_12px_#ffffff]">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}

export default Home;
