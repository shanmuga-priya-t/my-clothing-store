import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();

// MongoDB Database connect panrom
connectDB();

const app = express();

app.use(express.json());

// API Routes
app.use('/api/products', productRoutes);

// --- Static Folder Deployment Logic (IMPORTANT) ---
const __dirname = path.resolve();

// Frontend-la "npm run build" panna vandha 'dist' folder-ah serve panrom
app.use(express.static(path.join(__dirname, '/frontend/dist')));

// API routes-ah thavira matha entha URL vandhalum 'index.html'-ah load pannu
app.get('*', (req, res) =>
  res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
);
// --------------------------------------------------

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in production mode on port ${PORT}`);
});