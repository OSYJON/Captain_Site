const express = require('express');
const router = express.Router();
const { getConsultationInfo, signup, signin } = require('../controllers/consultationController');

// Routes
router.get('/consultation', getConsultationInfo);
router.post('/signup', signup);                  
router.post('/signin', signin);                  
module.exports = router;