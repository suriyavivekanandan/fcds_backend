import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// Import routes
import userRoute from './routes/food.routes.js';

const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));
app.use(cookieParser());

// Route declaration
app.use('/api', userRoute);

// Export the app
export { app };
