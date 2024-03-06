const express = require('express');
const { getuser, getuserid, postuser, putuser, deleteuser } = require('../Controller/user');
const { AuthorizationUser, AuthorizationAdmin ,Upload} = require('../middleware');
const router = express.Router();
router.get('/',AuthorizationAdmin, getuser).get('/:id', getuserid).post('/',Upload, postuser).put('/:id',AuthorizationUser, putuser).delete('/:id',AuthorizationAdmin, deleteuser)
module.exports = router;