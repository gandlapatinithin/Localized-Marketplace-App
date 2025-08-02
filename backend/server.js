import express from 'express';
import dotenv from 'dotenv';
import db from './config/db.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Connect to DB and start server
db.sync()
  .then(() => {
    console.log('Database connected.');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error('Failed to connect DB:', err));
