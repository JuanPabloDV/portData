const express = require('express');
const router = express.Router();
const ContactController = require('../controllers/ContactController');
const validateName = require('../middlewares/validateName');

router.post('/contatos', validateName, ContactController.create);
router.get('/contatos', ContactController.list);
router.get('/contatos/:id', ContactController.findById);
router.patch('/contatos/:id', validateName, ContactController.update);
router.delete('/contatos/:id', ContactController.delete);

module.exports = router;