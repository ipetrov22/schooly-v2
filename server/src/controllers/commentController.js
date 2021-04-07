const { Router } = require('express');
const router = Router();

const verifyIdToken = require('../middlewares/verifyIdToken');
const { commentService } = require('../services');

router.post('/', verifyIdToken, async (req, res) => {
    try {
        const response = await commentService.create(req.body, res._id);
        return res.json(response);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.delete('/:commentId', verifyIdToken, async (req, res) => {
    const { commentId } = req.params;
    try {
        const response = await commentService.deleteOne(req.body, commentId, res._id);
        return res.json(response);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

module.exports = router;