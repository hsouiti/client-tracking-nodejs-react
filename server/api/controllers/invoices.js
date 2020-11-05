import mongoose from 'mongoose'

import Invoice from '../models/invoice.js'


// get all invoices
export const getInvoices = async (req, res, next) => {
    try {
        const invoices = await Invoice.find({}).select('-__v')
        res.status(200).json(invoices)
    } catch (err) {
        err.status = 400
        next(err)
    }
}


// get one invoice
export const getInvoice = async (req, res, next) => {
    const { invoiceID } = req.params

    try {
        const invoice = await Invoice.findById(invoiceID) //.populate('client')
        invoice ? res.status(200).json(invoice)
            : res.status(404).json({ message: "No matching invoice found" })
    } catch (err) {
        err.status(404)
        next(err)
    }
}

// create Invoice
export const createInvoice = async (req, res, next) => {
    const { client, num, invoiceDate, items } = req.body

    if (!items || items.length === 0) {
        return res.status(409)
            .json({ message: "You must add at least one item to invoice!" })
    }

    const newInvoice = new Invoice({
        client,
        num,
        invoiceDate,
        items
    })

    try {
        const invoice = await newInvoice.save()
        res.status(200).json(invoice)
    } catch (err) {
        err.status = 409
        next(err)
    }
}

// update invoice
export const updateInvoice = async (req, res, next) => {
    const { invoiceID } = req.params
    if (!mongoose.Types.ObjectId.isValid(invoiceID)) {
        return res.status(404).json({ message: 'No matching invoice with given ID found!!' })
    }

    //FIXME:  No empty fields for required ones
    try {
        const invoice = await Invoice.findByIdAndUpdate(invoiceID, req.body, { new: true })
        res.status(200).json(invoice)
    } catch (err) {
        err.status = 400
        next(err)
    }

}


// delete invoice
export const deleteInvoice = async (req, res, next) => {
    const { invoiceID } = req.params

    if (!mongoose.Types.ObjectId.isValid(invoiceID)) {
        return res.status(404).json({ message: 'No matching invoice with given ID found!!' })
    }

    try {
        const invoice = await Invoice.findByIdAndDelete(invoiceID)
        invoice ? res.status(200).json({ message: "Invoice deleted succefully!" })
            : res.status(404).json({ message: "No matching invoice found" })
    } catch (err) {
        err.status = 400
        next(err)
    }

}