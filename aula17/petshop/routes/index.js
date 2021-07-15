var express = require('express');
var router = express.Router();
const servicoController = require('../controllers/servicosControlles')
const petsController = require('../controllers/petsController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

function c() {
  setTimeout(() => {console.log('c')}, 0)
  return
}

function b() {
  console.log('b')
  return c()
}

function a() {
  b()
  console.log('a')
  return
}

a()
