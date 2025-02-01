import { NavbarSimple } from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [cart, setCart] = useState([]);

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
  // const addToCart = (product) => {
  //   setCart((prevCart) => [...prevCart, product]);
  // };

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
            <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
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
                  type="button"
                  className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
                >
                  Add to Cart
                </button>

                <button
                  type="button"
                  className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                >
                  Buy now
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
