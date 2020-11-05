import express from 'express'
import * as invoicesControllers from '../controllers/invoices.js'

const router = express.Router()

router.route('/')
    .get(invoicesControllers.getInvoices)
    .post(invoicesControllers.createInvoice)

router.route('/:invoiceID')
    .get(invoicesControllers.getInvoice)
    .patch(invoicesControllers.updateInvoice)
    .delete(invoicesControllers.deleteInvoice)
export default router