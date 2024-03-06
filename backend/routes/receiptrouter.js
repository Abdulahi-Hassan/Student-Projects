const express = require('express');
const { postreceipt, getreceipt, getreceiptid, putreceipt, deletereceipt } = require('../Controller/receipt');
const { AuthorizationAdmin, AuthorizationUser } = require('../middleware');
const router = express.Router();
router.get('/',AuthorizationAdmin, getreceipt).get('/:id', getreceiptid).post('/', postreceipt).put('/:id',AuthorizationUser, putreceipt).delete('/:id',AuthorizationAdmin, deletereceipt)
module.exports = router;