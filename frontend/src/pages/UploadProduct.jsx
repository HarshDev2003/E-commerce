import { useState } from 'react';
import axios from 'axios';

export default function UploadProduct() {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setProduct((prevState) => ({
      ...prevState,
      image: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price);
    formData.append('image', product.image);

    try {
      const response = await axios.post('http://localhost:5000/api/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert(response.data.message);
      setProduct({ name: '', price: '', image: null });
    } catch (error) {
      console.error('Error uploading product:', error);
      alert('Failed to upload product.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Upload New Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Product Name</label>
            <input 
              type="text" 
              name="name" 
              value={product.name} 
              onChange={handleChange} 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Price</label>
            <input 
              type="number" 
              name="price" 
              value={product.price} 
              onChange={handleChange} 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Product Image</label>
            <input 
              type="file" 
              name="image" 
              onChange={handleFileChange} 
              className="w-full"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
            Upload Product
          </button>
        </form>
      </div>
    </div>
  );
}
