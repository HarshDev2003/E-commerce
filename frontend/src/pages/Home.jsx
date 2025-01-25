
import { NavbarSimple } from '../components/Navbar'
import { useEffect, useState } from 'react'
import axios from "axios";



function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      axios.get('http://localhost:5000/api/products')
        .then((response) => {
          setProducts(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching products:', error);
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <div className="text-center mt-20 text-xl">Loading...</div>;
    }
  return (
    <>
    <NavbarSimple>
    
    </NavbarSimple>
     <div className="min-h-screen">
     <header className="bg-blue-600 p-4 text-white text-center text-2xl font-bold">E-Commerce Store</header>
     <div className="container mx-auto p-6">
       <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
         {products.map((product) => (
           <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
             <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
             <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
             <p className="text-gray-600 mt-2">${product.price}</p>
             <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md w-full">
               Add to Cart
             </button>
           </div>
         ))}
       </div>
     </div>
   </div>
   </>
  )
}

export default Home