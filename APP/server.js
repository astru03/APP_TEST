const express = require('express');
const app = express();
const port = process.env.PORT || 3000

//Folders
app.use(express.static(__dirname + '/public'));


//Gets
app.get("/", (req, res) => { res.sendFile(__dirname + "/public/startseite.html"); });


//Listener
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
  })