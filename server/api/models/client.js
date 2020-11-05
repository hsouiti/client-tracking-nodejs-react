import mongoose from 'mongoose'

const { Schema, model } = mongoose

const clientSchema = Schema({

    fullName: {
        type: String,
        unique: true,
        required: [true, 'Name is required.']
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    price: {
        type: Number,
        required: [true, 'Price is required']
    },
    purchaseDate: {
        type: Date,
        default: Date.now,
        required: [true, 'Purchase Date is required']
    },
    city: String,
    // TODO: adding address
    invoices: [
        { type: Schema.Types.ObjectId, ref: 'Invoice' }
    ]

}, { timestamps: true })

const Client = model('Client', clientSchema)

export default Client