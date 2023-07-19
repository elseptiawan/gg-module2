const express = require('express');
const {
    index,
    show,
    store,
    play,
    getSongsSortByMostPlayed
} = require('../controllers/playlistController');

const router = express.Router();

router.get('/', index);
router.get('/:id', show);
router.get('/songs/most-played', getSongsSortByMostPlayed);
router.post('/', store);
router.patch('/:id', play);

module.exports = router;