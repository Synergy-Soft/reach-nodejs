const express = require('express');
const router = express.Router();
const { checkAuthenticated } = require('../middleware/authMiddleware');

// User Dashboard
router.get('/dashboard', checkAuthenticated, (req, res) => {
    if (req.user.role !== 'user') {
        return res.redirect('/c/dashboard'); // Redirect companies to their dashboard
    }
    res.render('user/dashboard', { user: req.user });
});

module.exports = router;