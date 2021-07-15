const petsJson = require('../database/pets.json') 
const servicojson = require('../database/servicos.json')
const petsController= {
    index:(req,res) => {
      return res.render('index' ,{'servicos2': servicojson.servicos})  
    },
    cadastro:(req, res) => {
      return res.render('cadastro')
    },
    servicos:(req, res) => {
      return res.render('servicos')
    },
    sobre:(req, res) => {
      return res.render('sobre')
    },
    login:(req, res) => {
      return res.render('login')
    },
    contato:(req, res) => {
      return res.render('contato')
    },
    show: (req, res) => {
      const { id } = req.params
      let resultado = petsJson.pets.filter(function (pet) {
          return pet.id == id
      })
      return res.send(resultado)
  }
}
module.exports = petsController;
