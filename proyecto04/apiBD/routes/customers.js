var express = require('express');
var router = express.Router();

const { Sequelize, Op } = require('sequelize');
const Customers = require('../models').customers;


router.get('/customers', function (req, res, next) {
    Customers.findAll({
        include: [{
            model: models.employees,
            as: 'salesRepEmployeeNumber_employee'
        }],
    })
        .then(customers => {
            res.json(customers)
        })
        .catch(error => res.status(400).send(error))
});

router.get('/findAllById/:customerNumber/json', function (req, res, next) {

    let customerNumber = parseInt(req.params.customerNumber);

    Customers.findAll({
        include: [{
            model: models.employees,
            as: 'salesRepEmployeeNumber_employee'
        }],
        where: {
            [Op.and]: [
                { customerNumber: customerNumber }
            ]
        }
    })
        .then(customers => {
            res.json(customers);
        })
        .catch(error => res.status(400).send(error))

});


module.exports = router;