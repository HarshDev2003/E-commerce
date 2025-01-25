import express from "express";
import cors from "cors";
import mysql from "mysql2"
import dotenv from 'dotenv';
import multer from 'multer';
import path from 'path';



const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());
app.use('/uploads',express.static('uploads'));



const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost' ,
    user: process.env.DB_USER  || 'root' ,
    password: process.env.DB_PASSWORD || '' ,
    database: process.env.DB_NAME || 'ecommerce_db'

});

db.connect((err) => {
    if (err) {
      console.error('Database connection failed:', err);
      return;
    }
    console.log('Connected to MySQL database');
  });
  
// Configure Multer for File Uploads
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    }
  });
  
  const upload = multer({ storage });
  
  // API to Upload Product Data
  app.post('/api/upload', upload.single('image'), (req, res) => {
    const { name, price } = req.body;
    const imageUrl = `http://localhost:5000/uploads/${req.file.filename}`;
  
    const query = 'INSERT INTO products (name, price, image) VALUES (?, ?, ?)';
    db.query(query, [name, price, imageUrl], (err, result) => {
      if (err) {
        console.error('Error inserting product:', err);
        return res.status(500).json({ error: 'Database insert failed' });
      }
      res.status(200).json({ message: 'Product uploaded successfully!' });
    });
  });
  

  app.get('/api/products', (req, res) => {
    const query = 'SELECT * FROM products';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching products:', err);
        res.status(500).json({ error: 'Database query failed' });
      } else {
        res.json(results);
      }
    });
  });
  
  const PORT = process.env.PORT || 2000;

  app.listen(PORT, ()=>{
    console.log(`Server is Started in http://localhost:${PORT}`);

  })