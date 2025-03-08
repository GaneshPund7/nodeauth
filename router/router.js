const express = require('express');
const { users, user, upUser, deUser} = require('../user/user');

const router = express.Router();

router.get('/user', users );
router.post('/user', user );
router.put('/user/:id', upUser );
router.delete('/user/:id', deUser );



module.exports = router;