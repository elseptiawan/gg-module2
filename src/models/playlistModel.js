let songs = [];

function addSong(song){
    song.playCount = 0;
    songs.push(song);
    return song;
}

function getAllSongs(){
    return songs;
}

function getSong(id){
    const song = songs.find((s) => s.id == id);
    return song;
}

function play(id){
    const song = songs.find((s) => s.id == id);
    song.playCount++;
    return song;
}

module.exports = {addSong, getAllSongs, getSong, play};