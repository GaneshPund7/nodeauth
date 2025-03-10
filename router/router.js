const express = require('express');
const { getUsers, addUsers, updateUser, deleteUser } = require('../user/user');

const router = express.Router();

router.get('/user', getUsers);
router.post('/user', addUsers);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

router.get('/users/:id', (request, response) => {
    response.send(`user ${request.params.id}`)
  })
module.exports = router;  