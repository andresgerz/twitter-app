const Router = require('express');
const router = new Router();

const { getTweet, createTweet, getTweetById } = require('../database');

router.get('/', getTweet);
router.post('/', createTweet);
router.get('/:id', getTweetById);


module.exports = router;