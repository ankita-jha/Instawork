const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// testing status
app.get('/', (req, res) => {
    res.status(200).send("This works!!");
  });


// sequleize

const db = require("./models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });


//   routes
require("./routes/teams.routes")(app);
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });