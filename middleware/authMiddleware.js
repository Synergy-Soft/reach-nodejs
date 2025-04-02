const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const checkAuthenticated = (req, res, next) => {
    const token = req.cookies.token; // Ensure this matches the cookie name
    if (!token) {
        return res.redirect('/login');
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.redirect('/login');
        }
        req.user = user; // Attach the decoded user data to the request object
        next();
    });
};

const checkNotAuthenticated = (req, res, next) => {
    const token = req.cookies.token; // Ensure this matches the cookie name
    if (token) {
        return res.redirect('/u/dashboard'); // Redirect to user dashboard by default
    }
    next();
};

module.exports = { checkAuthenticated, checkNotAuthenticated };