const express = require('express');
const router = express.Router();

const User = require('../Controllers/userController');

router.get('/all', User.allUser);
router.post('/save', User.saveUser);
module.exports = router;
