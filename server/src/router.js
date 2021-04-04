const { Router } = require('express');
const router = Router();

const controllers = require('./controllers');

router.use('/user', controllers.user);
router.use('/question', controllers.question);

module.exports = router;