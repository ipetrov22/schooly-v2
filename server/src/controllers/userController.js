const { Router } = require('express');
const router = Router();

const { userService } = require('../services');

router.post('/', async (req, res) => {
    try {
        const response = userService.createUser(req.body);
        return res.json(response);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

module.exports = router;