import express from "express";
import cors from "cors";
import mysql from "mysql2"
import dotenv from 'dotenv';
import multer from 'multer';
import path from 'path';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import session from "express-session";

const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());
app.use('/uploads',express.static('uploads'));
app.use(express.json());
<<<<<<< HEAD
app.use(cors({ origin: "http://localhost:5000", credentials: true }));
=======
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
>>>>>>> dc26034 (Login and Signup Backend)

app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: true },
  })
);


const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost' ,
    user: process.env.DB_USER  || 'root' ,
    password: process.env.DB_PASSWORD || '' ,
    database: process.env.DB_NAME || 'ecommerce'

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

  // **Login API**
 // Signup route
app.post("/signup", async (req, res) => {
<<<<<<< HEAD
  const { phone, password } = req.body;

  // Validate input
  if (!phone || !password) {
=======
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
>>>>>>> dc26034 (Login and Signup Backend)
    return res.status(400).json({ error: "Please provide both email and password" });
  }

  // Check if the user already exists
<<<<<<< HEAD
  const query = "SELECT * FROM users WHERE phone = ?";
=======
  const query = "SELECT * FROM users WHERE email = ?";
>>>>>>> dc26034 (Login and Signup Backend)
  db.query(query, [email], async (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database error" });
    }

    if (results.length > 0) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database
<<<<<<< HEAD
    const insertQuery = "INSERT INTO users (name,phone , password) VALUES (?, ?, ?)";
=======
    const insertQuery = "INSERT INTO users (email, password) VALUES (?, ?)";
>>>>>>> dc26034 (Login and Signup Backend)
    db.query(insertQuery, [email, hashedPassword], (err, result) => {
      if (err) {
        return res.status(500).json({ error: "Error while creating user" });
      }
<<<<<<< HEAD
      console.log(phone,password)
      // Create a JWT token
      const token = jwt.sign({ userId: result.insertId, phone }, JWT_SECRET, { expiresIn: "1h" });
=======

      // Create a JWT token
      const token = jwt.sign({ userId: result.insertId, email }, JWT_SECRET, { expiresIn: "1h" });
>>>>>>> dc26034 (Login and Signup Backend)

      // Send response with the token
      return res.status(201).json({ message: "Signup successful", token });
    });
  });
});

// Login route (same as previous)
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Validate input
  // if (!email || !password) {
  //   return res.status(400).json({ error: "Please provide both email and password" });
  // }

  // Check if the user exists in the database
  const query = "SELECT * FROM users WHERE email = ?";
  db.query(query, [email], async (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database error" });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: "User not found" });
    }

    // Compare password
    const user = results[0];
    // const isPasswordCorrect =  compare(password, user.password);

    if (password !== user.password) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Create JWT token
    // const token = jwt.sign({ userId: user.id, email: user.email });

    // Send response with the token
    return res.json({ message: "Login successful" });
  });
});

  
  const PORT = process.env.PORT || 2000;

  app.listen(PORT, ()=>{
    console.log(`Server is Started in http://localhost:${PORT}`);

  })