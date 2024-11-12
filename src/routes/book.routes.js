import express from 'express';
import { getAllBookings } from '../controllers/book.controller.js';

const router = express.Router();

// router.get('/bookings', getAllBookings); // Endpoint for getting all bookings

export default router;
