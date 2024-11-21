const express = require('express');
const router =  express.Router();

const tuitionController = require('../controller/tuition');

router.post('/create', tuitionController.createTuition)
router.post('/get-by-user-id', tuitionController.getTuitioByUserId)

 module.exports = router