const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();


//router.get('/add-contact', adminController.getAddContact);
router.get('/', adminController.getContacts);
router.post('/add-contact', adminController.postAddContact);
router.get('/delete-contact/:contactId', adminController.deleteContact);

module.exports = router;