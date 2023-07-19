# How to run

- clone repository
- run `npm install` to installing package
- run `npm run start` to run with normal nodejs
- run `npm run dev` to run with nodemon

# Features

- Get All Song from Playlist
    method : get
    path : './api/playlist'
- Get a Song by Id from playlist
    method : get
    path : './api/playlist/:id'
- Add a Song to Playlist
    method : post
    path : './api/playlist
    body : {
        id: require, positive number,
        title: require, string,
        artists: require, array,
        url: require, string
    }
- Play a Song from Playlist (increment song play count)
    method : patch
    path : './api/playlist/:id'