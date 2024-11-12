const FoodEntry = require('../models/food.model');


exports.createFoodEntry = async (req, res) => {
    try {
        const foodEntry = new FoodEntry(req.body);
        const savedEntry = await foodEntry.save();
        res.status(201).json(savedEntry);
    } catch (error) {
        res.status(400).json({ message: 'Error creating food entry', error });
    }
};


exports.getAllFoodEntries = async (req, res) => {
    try {
        const entries = await FoodEntry.find();
        res.status(200).json(entries);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching food entries', error });
    }
};


exports.getFoodEntryById = async (req, res) => {
    try {
        const entry = await FoodEntry.findById(req.params.id);
        if (!entry) {
            return res.status(404).json({ message: 'Food entry not found' });
        }
        res.status(200).json(entry);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching food entry', error });
    }
};

exports.updateFoodEntry = async (req, res) => {
    try {
        const updatedEntry = await FoodEntry.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedEntry) {
            return res.status(404).json({ message: 'Food entry not found' });
        }
        res.status(200).json(updatedEntry);
    } catch (error) {
        res.status(400).json({ message: 'Error updating food entry', error });
    }
};


exports.deleteFoodEntry = async (req, res) => {
    try {
        const deletedEntry = await FoodEntry.findByIdAndDelete(req.params.id);
        if (!deletedEntry) {
            return res.status(404).json({ message: 'Food entry not found' });
        }
        res.status(200).json({ message: 'Food entry deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting food entry', error });
    }
};
