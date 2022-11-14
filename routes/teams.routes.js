module.exports = app => {
    const teams = require("../controllers/team.controller");
    var router = require("express").Router();  


    // Create a new Team
  router.post("/", teams.create);

  // Retrieve all member
  router.get("/", teams.findAll);

  //. Update a member with id
  router.put("/:id", teams.update);

  // Delete a member with id
  router.delete("/:id", teams.delete);

  app.use('/team', router);

}
