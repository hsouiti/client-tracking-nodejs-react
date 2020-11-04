import express from 'express'

const router = express.Router()

router
    .route('/')
    .get((req, res, next) => {
        res.status(200).json({ message: 'Get' })
        next()
    })
    .post((req, res, next) => {
        res.status(200).json({ message: 'Post' })
    })


router
    .route('/:clientID')
    .get((req, res, next) => {
        res.status(200).json({ message: 'Get /:clientID', idClient: req.params.clientID })
    })
    .patch((req, res, next) => {
        res.status(200).json({ message: 'Patch /:clientID', idClient: req.params.clientID })
    })
    .delete((req, res, next) => {
        res.status(200).json({ message: 'Delete /:clientID' })
    })



export default router