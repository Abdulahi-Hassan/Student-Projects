const express = require('express');
const { AuthorizationAdmin, AuthorizationUser } = require('../middleware');
const { getstudent, getstudentid, poststudent, putstudent, deletestudent } = require('../Controller/student');
const router = express.Router();
router.get('/',AuthorizationAdmin, getstudent).get('/:id', getstudentid).post('/', poststudent).put('/:id/',AuthorizationUser , putstudent).delete('/:id',AuthorizationAdmin, deletestudent)
module.exports = router;