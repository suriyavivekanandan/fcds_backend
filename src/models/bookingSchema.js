import mongoose from 'mongoose';

// Define the schema for booking
const bookingSchema = new mongoose.Schema({
    dishId: { type: mongoose.Schema.Types.ObjectId, ref: 'FoodEntry', required: true },  // Reference to the food entry
    dishName: { type: String, required: true },  // Store the dish name
    name: { type: String, required: true },  // Trust's name
    charityName: { type: String, required: true },  // Charity or orphanage name
    bookedAt: { type: Date, default: Date.now },  // Timestamp for when the booking was made
});

// Create and export the Booking model
const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;
