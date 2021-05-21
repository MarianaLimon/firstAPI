
//  endpoint -> caso de uso -> modelo

const Koders = require('../models/koders')

function getAll () {
    return Koders.find({})    // find regresa una promesa
}

function newKoder (koder){
    const { name, lastName, age, gender } = koder
    return Koders.create( { name, lastName, age, gender } )
}

module.exports = {
    getAll,
    newKoder
}   
