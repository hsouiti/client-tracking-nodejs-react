import mongoose, { STATES } from 'mongoose'

const { Schema, model } = mongoose

const invoiceSchema = new Schema({

    number: {
        type: String,
        unique: true,
        required: [true, 'Number is required.']
    },
    invoiceDate: {
        type: Date,
        default: Date.now,
        required: [true, 'Date is required.']
    },
    deatails: [
        {
            code: {
                type: String,
                required: [true, 'Code is required']
            },
            name: {
                type: String,
                required: [true, 'Name is required']
            },
            quantity: {
                type: Number,
                required: [true, 'Quantity is Required']
            },
            price: {
                type: Number,
                required: [true, 'Price is required']
            },
        }
    ]
})


const Invoice = model('Invoice', invoiceSchema)

export default Invoice