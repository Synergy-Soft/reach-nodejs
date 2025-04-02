const express = require('express');
const router = express.Router();
const { checkAuthenticated } = require('../middleware/authMiddleware');

// Company Dashboard
router.get('/dashboard', checkAuthenticated, (req, res) => {
    if (req.user.role !== 'company') {
        return res.redirect('/u/dashboard'); // Redirect users to their dashboard
    }
    res.render('company/dashboard', { user: req.user });
});

module.exports = router;