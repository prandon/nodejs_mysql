const Company = require('../models').Company

exports.create = (req, res)=>{
    return Company.create({
        name: req.body.name,
    })
    .then(company => res.status(201).send(company))
    .catch(error => res.status(500).send(error))
}
