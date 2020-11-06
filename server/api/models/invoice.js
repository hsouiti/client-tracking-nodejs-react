import mongoose from 'mongoose'

const { Schema, model } = mongoose

const invoiceSchema = new Schema({

    num: {
        type: String,
        unique: true,
        required: [true, 'Number is required.']
    },
    invoiceDate: {
        type: Date,
        default: Date.now,
        required: [true, 'Date is required.']
    },
    items: [
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
                default: 1
            },
            price: {
                type: Number,
                required: [true, 'Price is required']
            },
        }
    ],
    client: {
        type: Schema.Types.ObjectId,
        ref: 'Client',
        required: true
    }
}, { timestamps: true })


const Invoice = model('Invoice', invoiceSchema)

export default Invoice