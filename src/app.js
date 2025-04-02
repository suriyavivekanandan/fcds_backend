import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// Import routes
import userRoute from './routes/food.routes.js';

const app = express();

// Allow both local development and production frontend
const allowedOrigins = ['http://localhost:5173', 'https://fcds-frontend.onrender.com'];

app.use(cors({
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      // Allow localhost for local development (origin is `null` in local development)
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET, POST, PUT, DELETE',
  allowedHeaders: 'Content-Type, Authorization',
}));

app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));
app.use(cookieParser());

// Route declaration
app.use('/api', userRoute);

// Export the app
export { app };
