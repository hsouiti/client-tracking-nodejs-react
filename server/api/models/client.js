import mongoose, { Schema, model } from 'mongoose'

const clientSchema = Schema({

    fullName: {
        type: String,
        required: [true, 'Name is required.']
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required']
    },
    mobile: String,
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
        required: [true, 'Purchase Date is required']
    },
    city: String
})

const Client = model('Client', clientSchema)

export default Client