const {
    addSong,
    getAllSongs,
    getSong,
    play,
    getMostPlayed
  } = require('../models/playlistModel');

function getPlaylists(){
    return getAllSongs();
}

function getPlaylist(id){
    return getSong(id);
}

function addPlaylist(song){
    return addSong(song);
}

function playSong(id){
    return play(id);
}

function mostPlayed(){
    return getMostPlayed();
}

module.exports = {getPlaylists, getPlaylist, addPlaylist, playSong, mostPlayed}