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
    .patch(clientsControllers.updateClient)
    .delete(clientsControllers.deleteClient)



export default router