const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index.controller');
const authController = require('../controllers/auth.controller');

router.get('/', authController.checkSession, indexController.getHome);

router.get('/oauth2/auth', authController.authLogin);

router.get('/oauth2/callback', authController.authCallback);

//router.get('/test', authController.checkSession, salesforceController.pushEvent);

module.exports = router;