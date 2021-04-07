const { Router } = require('express');
const router = Router();

const verifyIdToken = require('../middlewares/verifyIdToken');
const { userService } = require('../services');

router.post('/', async (req, res) => {
    try {
        const response = await userService.createUser(req.body);
        return res.json(response);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.get('/own', verifyIdToken, async (req, res) => {
    try {
        const response = await userService.getOwn(res._id);
        return res.json(response);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.put('/favorite/:questionId', verifyIdToken, async (req, res) => {
    try {
        const response = await userService.favoriteQuestion(questionId, res._id);
        return res.json(response);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

module.exports = router;