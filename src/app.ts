import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config';
import routes from './routes';
import { errorHandler } from './middlewares/errorHandler';

// Load env vars
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(errorHandler);

// Connect to DB
connectDB();

// Health check
app.get('/', (req, res) => {
  res.send('VISTA API is running');
});

app.use('/api', routes);

export default app; 