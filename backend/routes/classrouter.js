const express = require('express');
const { getclass, postclass, putclass, deleteclass, getclassid } = require('../Controller/class');
const { AuthorizationAdmin, AuthorizationUser } = require('../middleware');
const router = express.Router();
router.get('/', AuthorizationAdmin, getclass).get('/:id', getclassid).post('/', postclass).put('/:id', AuthorizationUser, putclass).delete('/:id', AuthorizationAdmin, deleteclass)
module.exports = router;