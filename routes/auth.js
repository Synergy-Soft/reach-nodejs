const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');
const { checkNotAuthenticated } = require('../middleware/authMiddleware');
const dotenv = require('dotenv');
dotenv.config();

const usersFilePath = path.join(__dirname, '../db/users.json');
const companiesFilePath = path.join(__dirname, '../db/companies.json');

// Helper function to read and write JSON files
const readJsonFile = (filePath) => {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
};

const writeJsonFile = (filePath, data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, "\t"));
};

// Render Login Page
router.get('/login', checkNotAuthenticated, (req, res) => {
    res.render('login');
});

// Handle Login (for both users and companies)
router.post('/login', async (req, res) => {
    const { email, password, role } = req.body; // role can be 'user' or 'company'
    console.log(req.body)
    let filePath, redirectPath;

    if (role === 'user') {
        filePath = usersFilePath;
        redirectPath = '/u/dashboard';
    } else if (role === 'company') {
        filePath = companiesFilePath;
        redirectPath = '/c/dashboard';
    } else {
        return res.redirect('/login');
    }

    const data = readJsonFile(filePath);
    const account = data.find(acc => acc.email === email);

    if (!account || !await bcrypt.compare(password, account.password)) {
        return res.redirect('/login?status=0');
    }

    const token = jwt.sign({ uid: account.uid, email: account.email, role }, process.env.JWT_SECRET);
    res.cookie('token', token, { httpOnly: true });
    res.redirect(redirectPath);
});

// Render Registration Page
router.get('/register', checkNotAuthenticated, (req, res) => {
    res.render('register');
});

// Handle Registration (for both users and companies)
router.post('/register', async (req, res) => {
    const { username, email, password, role } = req.body; // role can be 'user' or 'company'
    let filePath, redirectPath;

    if (role === 'user') {
        filePath = usersFilePath;
        redirectPath = '/u/dashboard';
    } else if (role === 'company') {
        filePath = companiesFilePath;
        redirectPath = '/c/dashboard';
    } else {
        return res.status(400).send('Invalid role');
    }

    const data = readJsonFile(filePath);

    if (data.find(acc => acc.email === email)) {
        return res.status(400).send('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newAccount = {
        uid: `${role}_${Date.now()}`,
        username,
        email,
        password: hashedPassword
    };

    data.push(newAccount);
    writeJsonFile(filePath, data);

    const token = jwt.sign({ uid: newAccount.uid, email: newAccount.email, role }, process.env.JWT_SECRET);
    res.cookie('token', token, { httpOnly: true });
    res.redirect(redirectPath);
});

module.exports = router;