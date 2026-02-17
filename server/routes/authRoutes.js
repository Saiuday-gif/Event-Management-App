const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// 1. REGISTER ROUTE 
router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        
        // User Check
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "యూజర్ ముందే ఉన్నారు!" });

        // Securing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // New user data will be added to database
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "Registration Successful!" });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
});

// 2. LOGIN ROUTE 
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Email Checking
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "No Users Available, Please Register Before." });

        // Password Checking 
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Incorrect Password!" });

        // After login we give the token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.status(200).json({ token, user: { id: user._id, name: user.name, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
});

module.exports = router;