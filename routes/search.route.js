const express = require('express');
const userController = require('../controller/search.controller');

const router = express.Router();

router.post('/', userController.welcome)

module.exports = router;