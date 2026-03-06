import express from 'express';
import { register, login } from '../controllers/authController.js';

const router = express.Router();

// Register vazhi
router.post('/register', register);

// Login vazhi
router.post('/login', login);

export default router;