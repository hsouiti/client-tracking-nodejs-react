import mongoose from 'mongoose'

const { Schema, model } = mongoose

const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

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
        unique: true,
        required: [true, 'Email is required'],
        validate: {
            validator: email => regexEmail.test(email),
            message: props => `${props.value} is not a valid email!`
        }
    },
    purchaseDate: {
        type: Date,
        default: Date.now,
        required: [true, 'Purchase Date is required']
    },
    address: {
        street: String,
        city: String,
        zipcode: String,
    },
    invoices: [{
        type: Schema.Types.ObjectId,
        ref: 'Invoice'
    }]

}, { timestamps: true })

const Client = model('Client', clientSchema)

export default Client