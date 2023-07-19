const {
    getPlaylists,
    getPlaylist,
    addPlaylist,
    playSong
  } = require('../services/playlistService');
const Validator = require('fastest-validator');

const v = new Validator();

const index = (req,res) => {
    const songs = getPlaylists();
    res.json({success:true, message:"Success Get All Song From Playlist", data:songs});
}

const show = (req, res) => {
    const id = req.params.id;
    const song = getPlaylist(id);
    res.json({success:true, message:`Success Get Song with id ${id}`, data:song});
}

const store = (req, res) => {
    const schema = {
        id: 'number|positive:true',
        title: 'string|empty:false',
        artists: 'array|empty:false',
        url: 'string|empty:false'
    }

    const validate = v.validate(req.body, schema);
        
    if (validate.length){
        return res.status(400).json(validate);
    }

    const song = addPlaylist(req.body);
    res.json({success:true, message:"Success Insert New Song to PLaylist", data:song});
}

const play = (req, res) => {
    const id = req.params.id;
    const song = playSong(id);
    res.json({success:true, message:`Play Song with id ${id}`, data:song});
}

module.exports = {index, show, store, play}