const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const consultationRoutes = require('./routes/consultationRoutes');
const { authenticateUser } = require('./middleware/auth');

dotenv.config();

// Middleware
app.use(express.static(path.join(__dirname, '../frontend')));
app.use(express.json());

// Routes
app.use('/api/auth', consultationRoutes);

// Serve Frontend Pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});
app.get('/student.html', authenticateUser, (req, res) => {
    if (req.user.role !== 'student') return res.status(403).send('Access denied');
    res.sendFile(path.join(__dirname, '../frontend/html/student.html'));
});

app.get('/consultant.html', authenticateUser, (req, res) => {
    if (req.user.role !== 'consultant') return res.status(403).send('Access denied');
    res.sendFile(path.join(__dirname, '../frontend/html/consultant.html'));
});



// Database Connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');

        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => console.error('Database connection error:', err));