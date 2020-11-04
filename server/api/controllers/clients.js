import mongoose from 'mongoose'
import Client from '../models/client.js'

// get all clients
export const getClients = async (req, res) => {
    try {
        const clients = await Client.find({})
        res.status(200).json(clients)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// get one client
export const getClient = async (req, res) => {
    const { clientID } = req.params

    try {
        const client = await Client.findById(clientID)
        client
            ? res.status(200).json(client)
            : res.status(404).json({ message: "No client found" })
    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}

// create client
export const createClient = async (req, res) => {
    const { fullName, phone, email, price, purchaseDate, city } = req.body
    // TODO: Check if the fullname is unique

    const newClient = new Client({
        fullName,
        phone,
        email,
        price,
        purchaseDate,
        city
    })

    try {
        const client = await newClient.save()
        res.status(201).json(client)
    } catch (err) {
        res.status(409).json({ error: err.message })
    }
}