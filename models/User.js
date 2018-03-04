module.exports = function(sequelize, Sequelize) {

    var User = sequelize.define('User', {

        id: {
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },

        firstName: {
          type: Sequelize.TEXT,
          allowNull: false
        },

        lastName: {
          type: Sequelize.TEXT,
          allowNull: false
        },

        city: {
          type: Sequelize.TEXT,
          allowNull: false
        },

        country: {
          type: Sequelize.TEXT,
          allowNull: false
        },

        gender: {
          type: Sequelize.TEXT,
          allowNull: false
        }

    });
    User.associate = function (models) {
    };

    return User;

};
