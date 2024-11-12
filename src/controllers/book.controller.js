import Booking from '../models/booking.model.js';  // Import the Booking model
import FoodEntry from '../models/food.model.js';   // Import the FoodEntry model

// Create a booking
export const createBooking = async (req, res) => {
    try {
        const { dishId, name, charityName } = req.body;

        // Ensure the dish exists in the FoodEntry collection
        const foodEntry = await FoodEntry.findOne({ "dishes._id": dishId });

        if (!foodEntry) {
            return res.status(404).json({ message: 'Dish not found in FoodEntry' });
        }

        // Find the dish in the FoodEntry collection
        const dish = foodEntry.dishes.find(d => d._id.toString() === dishId);

        if (!dish) {
            return res.status(404).json({ message: 'Dish not found' });
        }

        // Create a new booking instance
        const newBooking = new Booking({
            dishId,
            dishName: dish.name,  // Store the dish name in the booking
            name,
            charityName,
        });

        // Save the booking to the database
        await newBooking.save();

        res.status(200).json({ message: 'Booking successful', booking: newBooking });
    } catch (error) {
        console.error('Error processing booking:', error);
        res.status(500).json({ message: 'An error occurred while processing the booking' });
    }
};

// Get all bookings
export const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find().lean();
        res.status(200).json(bookings);
    } catch (error) {
        console.error('Error retrieving bookings:', error);
        res.status(500).json({ message: 'Error retrieving bookings', error });
    }
};

// Get booking by ID
export const getBookingById = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id).populate('dishId');
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.status(200).json(booking);
    } catch (error) {
        console.error('Error fetching booking:', error);
        res.status(500).json({ message: 'Error fetching booking', error });
    }
};

// Update booking
export const updateBooking = async (req, res) => {
    try {
        const updatedBooking = await Booking.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedBooking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.status(200).json(updatedBooking);
    } catch (error) {
        console.error('Error updating booking:', error);
        res.status(400).json({ message: 'Error updating booking', error });
    }
};

// Delete booking
export const deleteBooking = async (req, res) => {
    try {
        const deletedBooking = await Booking.findByIdAndDelete(req.params.id);
        if (!deletedBooking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.status(200).json({ message: 'Booking deleted successfully' });
    } catch (error) {
        console.error('Error deleting booking:', error);
        res.status(500).json({ message: 'Error deleting booking', error });
    }
};
