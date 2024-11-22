const express = require('express');
const router = express.Router();
const { getConsultationInfo } = require('../controllers/consultationController');

router.get('/consultation', getConsultationInfo);

module.exports = router;