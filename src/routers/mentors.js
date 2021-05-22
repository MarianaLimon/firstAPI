
const express = require('express')
const mentors = require('../usecases/mentors')

const router = express.Router()

// - GET
router.get('/', async (request, response) => {
    try{
        const allMentors = await mentors.getAll()

        response.json({
            success: true,
            message: 'All mentors',
            data: {
                mentors: allMentors
            }
        })
    } catch (error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error at get all Mentors',
            error: error.message
        })
    }
})

// - POST /mentors
router.post('/', async (request, response) => {
    try {
        const mentorCreated = await mentors.newMentor(request.body)
        response.json({
            success: true,
            message: 'Mentors created',
            data: {
                koder: mentorCreated
            }
        })
    }catch (error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error at post Mentor',
            error: error.message
        })
    }
})

/* 
{
	"name": "Charles",
	"lastName": "Silva",
	"age": 35,
	"gender": "m",
    "module": "back"
}
*/

// - DELETE /mentors
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params
        const mentorDeleted = await mentors.deleteMentor(id)

        response.json({
            succes: true,
            message: 'Deleted Mentor',
            data: {
                mentor: mentorDeleted
            }
        });

    } catch (error) {
        response.status(400);
        response.json({
            succes: false,
            message: 'Error at delete mentor',
            error: error.message
        });
    }
})

// - UPDATE/mentors
router.patch('/:id', async (request, response) =>{
    try {
        const { id } = request.params
        const mentorUpdated = await mentors.updateById(id, request.body)

        response.json({
            succes: true,
            message: 'Mentor Updated',
            data: {
                mentorUpdated
            }
        });

    } catch (error) {
        response.status(400);
        response.json({
            succes: false,
            message: 'Error at update Mentor',
            error: error.message
        });
    }
})

module.exports = router
