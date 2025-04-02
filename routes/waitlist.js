const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const waitlistFile = path.join(__dirname, '../db/waitlist.json') // JSON content: []

router.get('/waitlist', (req, res) => {
    res.send('You have been added to the waitlist!')
})

// Helper function to get current date and time in IST (Indian Standard Time)
const getISTTime = () => {
    const date = new Date();
    const options = {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
    };
    return new Intl.DateTimeFormat('en-IN', options).format(date);
};

router.post('/waitlist', (req, res) => {
    const { email } = req.body;
    console.log(req.body);

    if (!email) {
        return res.status(400).send('Email is required');
    }

    // Read the current waitlist data from the file
    fs.readFile(waitlistFile, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading waitlist file');
        }

        let waitlist = JSON.parse(data);

        // Check if the email is already in the waitlist
        const existingEmail = waitlist.find(item => item.email === email);

        if (!existingEmail) {
            // If the email does not exist, add it to the waitlist with the current IST time
            const newEntry = {
                email,
                data: getISTTime(),
            };
            waitlist.push(newEntry);

            // Write the updated waitlist back to the file
            fs.writeFile(waitlistFile, JSON.stringify(waitlist, null, "\t"), 'utf8', (err) => {
                if (err) {
                    return res.status(500).send('Error saving to waitlist file');
                }

                // Redirect the user to the /waitlist route
                res.redirect('/waitlist');
            });
        } else {
            // If email exists, just redirect without adding
            res.redirect('/waitlist');
        }
    });
});

module.exports = router;