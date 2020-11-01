import express from 'express'

const router = express.Router()

router
    .route('/')
    .get((req, res) => res.json({ message: 'Get' }))
    .post((req, res) => res.json({ message: 'Post' }))
    .patch((req, res) => res.json({ message: 'Patch' }))
    .delete((req, res) => res.json({ message: 'Delete' }))


export default router