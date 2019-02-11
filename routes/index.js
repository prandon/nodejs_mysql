const company_controller = require('../controllers/company')
const express = require('express')
const router = express.Router()

router.get('/test', (req, res) => {
    res.send('Hello World');
});

router.post('/company', company_controller.create);

module.exports = router