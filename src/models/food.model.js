const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    initialWeight: {
        type: Number,
        required: true
    },
    consumedWeight: {
        type: Number,
        required: true
    },
    remainingWeight: {
        type: Number,
        required: true
    },
});


const foodEntrySchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    mealType: {
        type: String,
        enum: ['Breakfast', 'Lunch', 'Dinner', 'Snack'],
        required: true
    },
    dishes: [dishSchema]
});

module.exports = mongoose.model('FoodEntry', foodEntrySchema);
