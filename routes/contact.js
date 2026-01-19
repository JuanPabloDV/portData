const express = require('express');
const router = express.Router();
const ContactController = require('../controllers/ContactController');
const validateName = require('../middlewares/validateName');

router.post('/contact', validateName, ContactController.create);
router.get('/contact', ContactController.list);
router.get('/contact/:id', ContactController.findById);
router.put('/contact/:id', validateName, ContactController.update);
router.delete('/contact/:id', ContactController.delete);

module.exports = router;