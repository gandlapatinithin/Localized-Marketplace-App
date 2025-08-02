import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { createUser, getUserByEmail } from '../models/userModel.js';

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existing = await getUserByEmail(email);
    if (existing) return res.status(400).json({ message: 'Email already registered' });

    const hashedPassword = await bcryptjs.hash(password, 10);
    const user = await createUser(email, hashedPassword);
    res.status(201).json({ id: user.id, email: user.email });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await getUserByEmail(email);
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user: { id: user.id, email: user.email } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
