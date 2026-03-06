import Product from '../models/product.js';

// 1. Ella products-aiyum edukka (Get all products)
export const getProducts = async (req, res) => {
try {
const products = await Product.find({});
res.json(products);
} catch (err) {
res.status(500).json({ error: err.message });
}
};

// 2. Oru specific product mattum edukka (Get product by ID)
export const getProductById = async (req, res) => {
try {
const product = await Product.findById(req.params.id);
if (product) {
res.json(product);
} else {
res.status(404).json({ message: "Product not found!" });
}
} catch (err) {
res.status(500).json({ error: err.message });
}
};