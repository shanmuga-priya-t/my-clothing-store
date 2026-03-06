import User from '../models/user.js';

// 1. User Register Logic
export const register = async (req, res) => {
try {
const { username, password } = req.body;

} catch (err) {
res.status(500).json({ error: err.message });
}
};

// 2. User Login Logic
export const login = async (req, res) => {
try {
const { username, password } = req.body;

} catch (err) {
res.status(500).json({ error: err.message });
}
};