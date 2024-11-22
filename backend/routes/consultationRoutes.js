const express = require('express');
const router = express.Router();
const { getConsultationInfo } = require('../controllers/consultationController');
const { signup, signin } = require('../controllers/consultationController');

router.get('/consultation', getConsultationInfo);

module.exports = router;

router.post('/signup', signup);

router.post('/signin', signin);

module.exports = router;