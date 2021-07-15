var express = require('express');
var router = express.Router();
const servicosController = require('../controllers/servicosController')
const petsController = require('../controllers/petsController')
/* GET home page. */
router.get('/' , petsController.index)
router.get('/cadastro', petsController.cadastro)
router.get('/servicos',petsController.servicos)
router.get('/sobre',petsController.sobre)
router.get('/login',petsController.login)
router.get('/contato', petsController.contato)
module.exports = router;

