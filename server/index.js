import express from 'express'
import clientsRoutes from './api/routes/clients.js'

const app = express()

app.use('/clients', clientsRoutes)

app.listen(3003, () => console.log('server running!!'))