import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const products = [
    { id: 1, name: 'iPhone 14', price: 999, image: 'https://via.placeholder.com/200' },
    { id: 2, name: 'Samsung Galaxy S23', price: 899, image: 'https://via.placeholder.com/200' },
    { id: 3, name: 'Google Pixel 7', price: 799, image: 'https://via.placeholder.com/200' }
  ];

  app.get('/api/products', (req, res) =>{
    res.json(products);
  })

  const PORT = process.env.PORT || 2000;

  app.listen(PORT, ()=>{
    console.log(`Server is Started in http://localhost:${PORT}`);

  })