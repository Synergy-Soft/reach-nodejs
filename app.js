const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser'); // Add this line
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const companyRoutes = require('./routes/company');
const waitlistRoute = require('./routes/waitlist');
const { checkAuthenticated } = require('./middleware/authMiddleware');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser()); // Add this line
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Static Routes

// Serve static files from the 'public' directory 
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use('/scripts', express.static(path.join(__dirname, 'public/scripts')));
app.use('/styles', express.static(path.join(__dirname, 'public/css')));

// Routes
app.use('/', authRoutes); // Authentication routes (login, register) (GET POST)
app.use('/', waitlistRoute);
app.use('/u', userRoutes); // User routes
app.use('/c', companyRoutes); // Company routes

app.get('/', (req, res) => {
    res.render('general/landing.ejs')
})

// Logout Route (for both users and companies)
app.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/login');
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});