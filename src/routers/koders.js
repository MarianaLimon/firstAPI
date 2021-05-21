
const express = require('express')
const koders = require('../usecases/koders')

const router = express.Router()

// middleware
router.use(express.json())

router.get('/', async (request, response) => {
    try{
        const allKoders = await koders.getAll()

        response.json({
            success: true,
            message: 'All koders',
            data: {
                koders: allKoders
            }
        })
    } catch (error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error at get all Koders',
            error: error.message
        })
    }
})

// Practica:
// - POST /koders
// - DELETE /koders/:id Koders.findByIdAndDelete(id)

router.post('/', async (request, response) => {
    
    try {
        
        await koders.newKoder(request.body)

        response.json({
            success: true,
            message: 'koder created'
        })
    }catch (error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error at post Koder',
            error: error.message
        })
    }
})

/* 

{
	"name": "Jhonathan",
	"lastName": "Quiroz",
	"age": 38,
	"gender": "m"
}

*/

router.delete('/:id', async (request, response) => {
    
    try {
        
        await koders.deleteKoder(request.params.id)

        response.json({
            succes: true,
            message: 'Deleted Koder',
        });

    } catch (error) {
        response.status(400);
        response.json({
            succes: false,
            message: 'Error at delete Koder',
            error: error.message
        });
    }
})


module.exports = router
