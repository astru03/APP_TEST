const express = require('express');
const app = express();
const port = process.env.PORT || 8081

//Folders
app.use(express.static(__dirname + '/public'));


//Gets
app.get("/", (req, res) => { res.sendFile(__dirname + "/public/startseite.html"); });


//Listener
app.listen(port, () => {
    console.log(`App listening at http://54.185.59.127:${port}`)
  })