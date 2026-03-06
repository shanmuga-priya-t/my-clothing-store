import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const __dirname = path.resolve();

// Static files (Images/Frontend)
app.use(express.static(path.join(__dirname, '/frontend/dist')));

// API Routes (Unga palaiya routes inga irukkum)
app.get('/api/products', (req, res) => {
  res.send('API is running...');
});

// FIX: '*' badhula '(.*)' kuduthurukaen - Idhu dhaan crash-ah thadukkum
app.get('(.*)', (req, res) =>
  res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
