module.exports = (sequelize, Sequelize) => {
    const Teams = sequelize.define("teams", {
        id: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        first_name: {
            type: Sequelize.STRING,
            // allowNull: false
        },
        last_name: {
            type: Sequelize.STRING,
           
        },
        phoneNumber: {
            type: Sequelize.INTEGER,
            unique: true
        },
        email: {
            type: Sequelize.STRING,
            unique: true
        }, 
        role: {
            type: Sequelize.STRING
          }
        
    });
  
    return Teams;
  };