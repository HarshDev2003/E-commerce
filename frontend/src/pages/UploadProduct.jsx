import { useState } from "react";
import axios from "axios";
import Home from "./Home";

export default function UploadProduct() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setProduct((prevState) => ({
      ...prevState,
      image: e.target.files[0],
    }));

    const file = e.target.files[0];
    if (file) {
      setProduct({ ...product, image: file });

      // Preview the image
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("image", product.image);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      alert(response.data.message);
      setProduct({ name: "", price: "", image: null });
      window.location.reload();
    } catch (error) {
      console.error("Error uploading product:", error);
      alert("Failed to upload product.");
    }
  };


  const [preview, setPreview] = useState(null);

 
  const handleReset = () => {
    setProduct({
      name: "",
      price: "",
      image: null,
    });
  };

  return (
    <>
      <Home />

      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Upload New Product
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              placeholder="Enter product name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 placeholder-gray-400 shadow-sm"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Price</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              placeholder="Enter product price"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 placeholder-gray-400 shadow-sm"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Product Image
            </label>
            <div
              className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 transition"
              onClick={() => document.getElementById("fileInput").click()}
            >
              <input
                type="file"
                name="image"
                id="fileInput"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                required
              />
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-40 object-contain rounded-lg mx-auto"
                />
              ) : (
                <div>
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16.5V3.75m0 0L7.5 8.25M12 3.75l4.5 4.5M6.75 12.75v4.5A2.25 2.25 0 0 0 9 19.5h6a2.25 2.25 0 0 0 2.25-2.25v-4.5"
                    ></path>
                  </svg>
                  <p className="mt-3 text-gray-500">
                    <span className="font-semibold text-blue-500">
                      Click to upload
                    </span>{" "}
                    or drag and drop
                  </p>
                  <p className="text-sm text-gray-400 mt-1">PNG, JPG, JPEG (Max 5MB)</p>
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-semibold text-lg shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all"
          >
            Upload Product
          </button>
          <button
  type="button"  // use "button" instead of "reset" to control with your own handler
  className="w-full bg-gray-300 text-gray-800 py-3 rounded-lg font-semibold text-lg shadow-lg hover:bg-gray-400 transition-all"
  onClick={handleReset}  // Reset form fields
>
  Reset Form
</button>
        </form>
      </div>

    </>
  );
}
