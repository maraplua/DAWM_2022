var express = require('express');
var router = express.Router();

const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/customers', function (req, res, next) {


  models.customers.findAll({
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

router.get('/employees', function (req, res, next) {


  models.employees.findAll({
    include: [{
      model: models.customers,
      as: 'customers'
    }],
  })
    .then(customers => {
      res.json(customers)
    })
    .catch(error => res.status(400).send(error))
});


module.exports = router;
