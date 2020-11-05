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