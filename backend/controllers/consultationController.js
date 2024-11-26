const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Handle GET request for consultation info
const getConsultationInfo = (req, res) => {
    res.json({ message: 'Advising service is available!' });
};

// Handle user signup
const signup = async (req, res) => {
    const { name, email, password, role } = req.body;

    // Validate role
    if (!['student', 'consultant'].includes(role)) {
        return res.status(400).send('Invalid role');
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword, role });
        await newUser.save();
        res.status(201).send('User registered successfully');
    } catch (err) {
        res.status(500).send('Error: ' + err.message);
    }
};

// Handle user signin
const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).send('User not found');

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(400).send('Invalid credentials');

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        res.status(200).json({ token, role: user.role });
    } catch (err) {
        res.status(500).send('Error: ' + err.message);
    }
};

module.exports = { getConsultationInfo, signup, signin };