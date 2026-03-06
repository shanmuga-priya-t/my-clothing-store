import express from 'express';
const router = express.Router();
import { getProducts, getProductById } from '../controllers/productController.js';

// Ellaa products-ahyum yedukka
router.get('/', getProducts);

// Oru specific product-ah mattum yedukka (ID vachi)
router.get('/:id', getProductById);

export default router;