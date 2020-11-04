import express from 'express'
import * as clientsControllers from '../controllers/clients.js'

const router = express.Router()

router
    .route('/')
    .get(clientsControllers.getClients)
    .post(clientsControllers.createClient)


router
    .route('/:clientID')
    .get(clientsControllers.getClient)
    .patch((req, res, next) => {
        res.status(200).json({ message: 'Patch /:clientID', idClient: req.params.clientID })
    })
    .delete((req, res, next) => {
        res.status(200).json({ message: 'Delete /:clientID' })
    })



export default router