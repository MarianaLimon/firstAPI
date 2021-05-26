
const express = require('express')

const router = express.Router()

const users = require('../usecases/users')

router.post('/', async (request, response) => {
    try {
        const newUser = await users.signUp(request.body)
        response.json({
            success: true,
            message: 'User registered',
            data: {
                user: newUser
            }
        })
    }catch (error){
        response.status(400)
        response.json({
            success: false,
            message: 'Cloud not register',
            error: error.message
        })
    }
})

router.get('/', async (request, response) => {
    try {
        const allUsers = await users.getAll()
        response.json({
            success: true,
            message: 'All Users',
            data: {
                user: allUsers
            }
        })
    }catch (error){
        response.status(400)
        response.json({
            success: false,
            message: 'Cloud not get users',
            error: error.message
        })
    }
})

/* {
	"name": "charles",
	"email": "charles@kodemia.mx",
	"password": "kodemia123"
} */

router.post('/login', async (request, response) => {
    try {
        const { email, password } = request.body
        const token = await users.login(email, password)
        response.json({
            success: true,
            message: 'Logged in',
            data: {
                token
            }
        })
    }catch (error){
        response.status(400)
        response.json({
            success: false,
            message: 'Cloud not log in',
            error: error.message
        })
    }
})

/* {
    "email": "mariana@limonyya.com",
    "password": "Mariana123"
} */

module.exports = router
