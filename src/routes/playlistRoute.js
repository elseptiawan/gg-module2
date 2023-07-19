const express = require('express');
const {
    index,
    show,
    store,
    play
} = require('../controllers/playlistController');

const router = express.Router();

router.get('/', index);
router.get('/:id', show);
router.post('/', store);
router.patch('/:id', play);

module.exports = router;