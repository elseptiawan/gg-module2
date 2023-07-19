const express = require('express');
const app = express();

const playlistRoute = require('./routes/playlistRoute');

app.use(express.json());

const apiRoutes = express.Router();
app.use('/api', apiRoutes);

apiRoutes.use('/playlist', playlistRoute);

app.listen(3000, () => {
    console.log(`Run on port 3000`)
  })