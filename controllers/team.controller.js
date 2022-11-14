const db = require("../models");
const Teams = db.teams;
const Op = db.Sequelize.Op;

// Create and Save a new Team member
exports.create = (req, res) => {




// team
// Create a Tutorial
const team = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phoneNumber: req.body.phoneNumber,
    email:req.body.email,
    role:req.body.role
  };


   // Save member in the database
   Teams.create(team)
   .then(data => {
     res.send(data);
   })
   .catch(err => {
     res.status(500).send({
       message:
         err.message || "Some error occurred while creating the Tutorial."
     });
   });

  
}

// Retrieve all Team members from the database.
exports.findAll = (req, res) => {
  
};

// Update a member by the id in the request
exports.update = (req, res) => {
  
};

// Delete a member with the specified id in the request
exports.delete = (req, res) => {
  
};
