const express = require('express')
const router = express.Router()
const controller = require('./controller')
const response = require('../../network/response')

router.get('/', async(req, res) => {
    try {
        const users = await controller.getAllUsers()

        response.success(req, res, users, 201)
    } catch (error) {
        response.error(req, res, error.message, 404)
    }
})
router.post('/create', async(req, res) => {
    try {
        const user = await controller.createUser(req.body)

        response.success(req, res, user, 201)
    } catch (error) {
        response.error(req, res, error.message, 500)
    }
})
router.put('/update/:id', async(req, res) => {
    try {
        const user = await controller.updateUser(req.body, req.params.id)

        response.success(req, res, user, 201)
    } catch (error) {
        response.error(req, res, error.message, 404)
    }
})
router.delete('/delete/:id', async(req, res) => {
    try {
        const user = await controller.deleteUser(req.params.id)

        response.success(req, res, user, 201)
    } catch (error) {
        response.error(req, res, error.message, 404)
    }
})


module.exports = router