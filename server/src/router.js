const { Router } = require('express');
const router = Router();

const controllers = require('./controllers');

router.use('/user', controllers.user);
router.use('/question', controllers.question);
router.use('/comment', controllers.comment);

module.exports = router;