// backend/server.js

const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());

// Example data to send to the frontend
const data = [
    { id: 4, name: 'MAry Lamb', role: 'UX Engineer' },
    { id: 2, name: 'Jane Smith', role: 'Product Manager' },
    { id: 3, name: 'Samuel Lee', role: 'Designer' },
];

// Route to fetch data
app.get('/api/users', (req, res) => {
    res.json(data);
});

// Start the server
app.listen(port, () => {
    console.log(`Backend server running on http://localhost:${port}`);
});
