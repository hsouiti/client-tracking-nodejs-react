import express from 'express'
import clientsRoutes from './api/routes/clients.js'

const app = express()

//app.use(express.json())

// Routes
app.use('/api/clients', clientsRoutes)

// Handling errors
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
})


export default app



