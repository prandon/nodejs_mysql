const Company = require('../models').Company
const { validationResult } = require('express-validator/check');

exports.create = (req, res)=>{
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    return Company.create({
        name: req.body.name,
    })
    .then(company => res.status(201).send(company))
    .catch(error => res.status(500).send(error))
}


exports.fetchAll = (req, res) => {
    return Company.findAll()
    .then((data) => {res.status(200).send(data)})
    .catch(error => {res.status(500).send({message: "Something went wrong."})});
}