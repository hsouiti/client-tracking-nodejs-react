import express from 'express'
import cors from 'cors'

import clientsRoutes from './api/routes/clients.js'
import mongoose from 'mongoose'

const app = express()


// Global Middelwares
app.use(express.json())
app.use(cors())

// Routes
app.use('/api/clients', clientsRoutes)

// Handling errors
app.use((error, req, res, next) => {
    res.status(error.status || 500)
        .json({
            error: {
                message: error.message
            }
        })
})


export default app



