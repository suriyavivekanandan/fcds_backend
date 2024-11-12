import express from 'express';
import {
    createFoodEntry,
    getAllFoodEntries,
    getFoodEntryById,
    updateFoodEntry,
    deleteFoodEntry
} from '../controllers/food.controller.js';
import {
    createBooking,
    getAllBookings,
    getBookingById,
    updateBooking,
    deleteBooking
} from '../controllers/book.controller.js';  // Import booking controllers

const router = express.Router();

// Routes for food entries
router.post('/create', createFoodEntry);
router.get('/get', getAllFoodEntries);
router.get('/getby/:id', getFoodEntryById);
router.put('/update/:id', updateFoodEntry);
router.delete('/delete/:id', deleteFoodEntry);

// Routes for bookings
router.post('/book', createBooking);  // Create a booking
router.get('/bookings', getAllBookings);  // Get all bookings
router.get('/bookings/:id', getBookingById);  // Get a booking by ID
router.put('/bookings/:id', updateBooking);  // Update a booking by ID
router.delete('/bookings/:id', deleteBooking);  // Delete a booking by ID

export default router;
