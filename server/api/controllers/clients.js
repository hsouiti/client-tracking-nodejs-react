import mongoose from 'mongoose'
import Client from '../models/client.js'

// get all clients
export const getClients = async (req, res, next) => {
    try {
        const clients = await Client.find({}).select('-__v')
        res.status(200).json(clients)
    } catch (err) {
        err.status = 400
        next(err)
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
        err.status = 404
        next(err)

    }
}

// create client
export const createClient = async (req, res, next) => {
    const { fullName, phone, email, price, purchaseDate, city } = req.body

    const fName = await Client.find({ fullName: req.body.fullName })
    if (fName) {
        res.status(409).json({ message: "Client already exist!!!" })
        return
    }
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
        err.status = 409
        next(err)
    }
}


// update client
export const updateClient = async (req, res, next) => {
    const { clientID } = req.params
    if (!mongoose.Types.ObjectId.isValid(clientID)) {
        return res.status(404).json({ message: 'No matching client with given ID found!!' })
    }

    //FIXME:  No empty fields for required ones
    try {
        const client = await Client.findByIdAndUpdate(clientID, req.body, { new: true })

        res.status(200).json(client)
    } catch (err) {
        err.status = 409
        next(err)
    }
}


// delete client
export const deleteClient = async (req, res) => {

    const { clientID } = req.params

    if (!mongoose.Types.ObjectId.isValid(clientID)) {
        return res.status(404).json({ message: 'No matching client with given ID found!!' })
    }


    try {
        const client = await Client.findByIdAndDelete(clientID)

        client
            ? res.status(200).json({ message: "Client deleted succefully!" })
            : res.status(404).json({ message: "No matching client found" })
    } catch (err) {
        err.status = 400
        next(err)
    }
}


// get all client Invoices

export const getAllinvoices = async (req, res, next) => {
    const { clientID } = req.body
    if (!mongoose.Types.ObjectId.isValid(clientID)) {
        return res.status(404).json({ message: 'No matching client with given ID found!!' })
    }
    try {
        // TODO: 

    } catch (err) {
        err.status = 400
        next(err)
    }
}