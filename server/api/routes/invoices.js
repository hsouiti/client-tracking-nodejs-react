import express from 'express'
import * as invoicesControllers from '../controllers/invoices.js'

const router = express.Router()

router.route('/')
    .get(invoicesControllers.getInvoices)
    .post(invoicesControllers.createInvoice)


export default router