//  endpoint -> caso de uso -> modelo

const Mentors = require('../models/mentors')

function getAll () {
    return Mentors.find({})    // find regresa una promesa
}

function newMentor ({ name, lastName, age, gender, module}){
    return Mentors.create( { name, lastName, age, gender, module } )
}

function deleteMentor(id){
    return Mentors.findByIdAndDelete(id);
}

function updateById(id, dataToUpdate){
    return Mentors.findByIdAndUpdate(id, dataToUpdate);
}

module.exports = {
    getAll,
    newMentor,
    deleteMentor,
    updateById
}