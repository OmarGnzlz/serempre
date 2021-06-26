const express = require('express')
const router = express.Router()
const controller = require('./controller')
const response = require('../../network/response')

router.post('/create', async(req, res) => {
    try {
        await controller.createPoints(req.body)

        response.success(req, res, {message: 'points  succesfully create'}, 201)
    } catch (error) {
        response.error(req, res, error.message, 500)
    }
})
router.put('/update/:id', async(req, res) => {
    try {
        controller.updatePoints(req.body, req.params.id)

        response.success(req, res, {message: 'points succesfully updated'}, 201)
    } catch (error) {
        response.error(req, res, error.message, 404)
    }
})
router.delete('/delete/:id', async(req, res) => {
    try {
        await controller.deletePoints(req.params.id)

        response.success(req, res, {message: 'points succesfully deleted'}, 201)
    } catch (error) {
        response.error(req, res, error.message, 404)
    }
})


module.exports = router