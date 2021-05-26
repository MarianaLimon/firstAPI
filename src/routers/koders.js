
const express = require('express')
const koders = require('../usecases/koders')

const authMiddlewares = require('../middlewares/auth')

const router = express.Router()


// - GET
router.get('/', authMiddlewares.auth, async (request, response) => {
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

// - POST /koders
router.post('/', authMiddlewares.authRoles(['admin']), async (request, response) => {
    try {
        const koderCreated = await koders.newKoder(request.body)
        response.json({
            success: true,
            message: 'koder created',
            data: {
                koder: koderCreated
            }
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

// - DELETE /koders/:id Koders.findByIdAndDelete(id)
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params
        const koderDeleted = await koders.deleteKoder(id)

        response.json({
            succes: true,
            message: 'Deleted Koder',
            data: {
                koder: koderDeleted
            }
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

// - UPDATE/koders/:id 
router.patch('/:id', async (request, response) =>{
    try {
        const { id } = request.params
        const koderUpdated = await koders.updateById(id, request.body)

        response.json({
            succes: true,
            message: 'Koder Updated',
            data: {
                koderUpdated
            }
        });

    } catch (error) {
        response.status(400);
        response.json({
            succes: false,
            message: 'Error at update Koder',
            error: error.message
        });
    }
})

module.exports = router
