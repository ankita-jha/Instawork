const db = require("../models");
const Teams = db.teams;
const Op = db.Sequelize.Op;
const { uuid } = require('uuidv4');
const { UUIDV4 } = require("sequelize");
// Create and Save a new Team member
exports.create = (req, res) => {


     // Validate request
  if (! (req.body.first_name && req.body.last_name && req.body.phoneNumber && req.body.email && req.body.role)) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }



// team
// Create a Tutorial
const team = {
    id:uuid(),
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
         err.message || "Some error occurred while inserting a new member to the Team."
     });
   });

  
}

// Retrieve all Team members from the database.
exports.findAll = (req, res) => {
    Teams.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Update a member by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;


    Teams.update(req.body, {
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "member was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update member with id=${id}. Maybe member was not found or req.body is empty!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Tutorial with id=" + id
          });
        });

};

// Delete a member with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Teams.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Teams was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete Teams with id=${id}. Maybe Teams was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete Teams with id=" + id
          });
        });


};
