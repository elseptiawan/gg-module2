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

function getMostPlayed(){
    return songs.sort((a, b) => (a.playCount > b.playCount ? -1 : 1));
}

module.exports = {addSong, getAllSongs, getSong, play, getMostPlayed};