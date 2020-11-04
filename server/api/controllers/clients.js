import mongoose from 'mongoose'
import Client from '../models/client.js'

// get all clients
export const getClients = async (req, res) => {
    try {
        const clients = await Client.find({}).select('-__v')
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
            : res.status(404).json({ message: "No matching client found" })
    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}

// create client
export const createClient = async (req, res) => {
    const { fullName, phone, email, price, purchaseDate, city } = req.body
    // TODO: Check if the fullname is unique before saving

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


// update client
export const updateClient = async (req, res) => {
    const { clientID } = req.params
    if (!mongoose.Types.ObjectId.isValid(clientID)) {
        return res.status(404).json({ message: 'No matching client found!!' })
    }

    // FIXME: No empty fields for required ones
    const { fullName, phone, email, price, purchaseDate, city } = req.body

    try {
        const client = await Client.findByIdAndUpdate(clientID, {
            fullName, phone, email, price, purchaseDate, city
        }, { new: true })

        res.status(200).json(client)
    } catch (err) {
        res.status(200).json({ error: err.message })
    }
}


// delete client
export const deleteClient = async (req, res) => {

    const { clientID } = req.params

    if (!mongoose.Types.ObjectId.isValid(clientID)) {
        return res.status(404).json({ message: 'No matching client found!!' })
    }


    try {
        const client = await Client.findByIdAndDelete(clientID)
        res.status(200).json({ message: "Client deleted succefully!" })
    } catch (err) {
        res.status(200).json({ error: err.message })
    }
}