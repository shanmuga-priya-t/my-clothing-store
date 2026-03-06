import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Product from './models/product.js';
import products from './data/product.js';

dotenv.config();

const importData = async () => {
try {
// 1. Database connection
await connectDB();

// 2. Clear existing products
await Product.deleteMany({});

// 3. Insert sample products
await Product.insertMany(products);

console.log('🔥 Data Imported Successfully!');
process.exit();
} catch (err) {
console.error(`Error: ${err.message}`);
process.exit(1);
}
};

importData();