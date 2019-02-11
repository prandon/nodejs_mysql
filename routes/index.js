const company_controller = require('../controllers/company')
const express = require('express')
const { check } = require('express-validator/check');

const router = express.Router()

router.get('/test', (req, res) => {
    res.send('Hello World');
});

router.post('/company',[check('name').isEmail()], company_controller.create);

router.get('/company', company_controller.fetchAll);

module.exports = router