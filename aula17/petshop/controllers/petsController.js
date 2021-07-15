const petsJson = require('../database/petsJson')
const petsController = {
    index:(req,res) => {
        return res.send(petsJson)
    }
}
module.exports = petsController;