import mongoose from 'mongoose';

// Define the schema with timestamps to include createdAt and updatedAt fields automatically
const bookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    charityName: { type: String, required: true },
    dishId: { type: mongoose.Schema.Types.ObjectId, ref: 'Dish', required: true }
}, { timestamps: true }); // This will add createdAt and updatedAt fields automatically

// Export the model
export default mongoose.model('Booking', bookingSchema);
