const express = require('express');
const router = express.Router();
const playlist = require('../models/playlist');

router.get('', async (req, res) => {


try {
  const song = await playlist.find();
  res.render("producer.ejs", {song});
} catch(error) {
  console.log(error);
}

});





  function insertSong() {
   playlist.insertMany([
     {
       title: "song1",
       artist: "artist1"
     },
     {
       title: "song2",
       artist: "artist2"
     },
     {
       title: "song3",
       artist: "artist3"
     },
     {
         title: "song4",
         artist: "artist4"
      },
      {
        title: "song4",
        artist: "artist4"
      }
    ])}

insertSong();




module.exports = router;