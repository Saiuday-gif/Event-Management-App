const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
    let token;
    
    // Token Checking From Frontend
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Taking Token
            token = req.headers.authorization.split(' ')[1];
            
            // Token Checking
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            
            // We Can Add User Data Request 
            req.user = await User.findById(decoded.id).select('-password');
            next();
        } catch (error) {
            res.status(401).json({ message: "Not authorized, token failed" });
        }
    }

    if (!token) {
        res.status(401).json({ message: "Not authorized, no token" });
    }
};

module.exports = { protect };