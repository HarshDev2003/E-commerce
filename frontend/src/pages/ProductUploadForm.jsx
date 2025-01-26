import { useState } from "react";

export default function ProductUploadForm() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: null,
  });
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Uploading Product:", product);
    window.location.reload();
  };

  return (
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
                className="w-full h-40 object-cover rounded-lg mx-auto"
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
      </form>
    </div>
  );
}
