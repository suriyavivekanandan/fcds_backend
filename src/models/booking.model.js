import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    charityName: { type: String, required: true },
    dishId: { type: mongoose.Schema.Types.ObjectId, ref: 'Dish', required: true },
    dishName: { type: String, required: true } // ✅ Store dish name directly
}, { timestamps: true });

export default mongoose.model('Booking', bookingSchema);
