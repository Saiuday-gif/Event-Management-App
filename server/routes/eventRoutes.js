const express = require('express');
const Event = require('../models/Event');
const router = express.Router();

// 1. GET EVENTS (Search & Filter లాజిక్)
router.get('/', async (req, res) => {
    try {
        const { search, category, location } = req.query;
        let query = {};

        // We will Use Case Sensitive When User Login's
        if (search) query.name = { $regex: search, $options: 'i' };
        
        // Filtering The Location
        if (category) query.category = category;
        if (location) query.location = location;

        const events = await Event.find(query);
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
});

// 2. CREATE EVENT 
router.post('/', async (req, res) => {
    try {
        const newEvent = new Event(req.body);
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(500).json({ message: "Event Is Not Created", error: error.message });
    }
});

module.exports = router;