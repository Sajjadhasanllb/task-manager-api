const jwt = require('jsonwebtoken');

// This function is our gatekeeper
module.exports = function(req, res, next) {
    // 1. Get the token from the request header
    const token = req.header('x-auth-token');

    // 2. If there's no token, deny access
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    // 3. If there is a token, verify it
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // If the token is valid, add the user's info to the request object
        req.user = decoded.user;
        // Call next() to proceed to the actual route
        next();
    } catch (err) {
        // If the token is not valid, deny access
        res.status(401).json({ msg: 'Token is not valid' });
    }
};