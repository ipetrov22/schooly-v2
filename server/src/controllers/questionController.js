const { Router } = require('express');
const router = Router();

const verifyIdToken = require('../middlewares/verifyIdToken');
const { questionService } = require('../services');

router.post('/', verifyIdToken, async (req, res) => {
    try {
        const response = await questionService.create(req.body, res._id);
        return res.json(response);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.get('/', async (req, res) => {
    try {
        const response = await questionService.getAll();
        return res.json(response);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

module.exports = router;