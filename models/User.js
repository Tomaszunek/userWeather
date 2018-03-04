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

        cityId: {
          type: Sequelize.INTEGER,
          allowNull: false
        },

        stateId: {
          type: Sequelize.INTEGER,
          allowNull: false
        },

        countryId: {
          type: Sequelize.INTEGER,
          allowNull: false
        },

        gender: {
          type: Sequelize.TEXT,
          allowNull: false
        }

    });
    User.associate = function (models) {

      User.belongsTo(models.City, {
         as: 'UserCity',
         foreignKey: 'cityId'
       });

       User.belongsTo(models.State, {
          as: 'UserState',
          foreignKey: 'stateId'
        });

       User.belongsTo(models.Country, {
         as: 'UserCountry',
         foreignKey: 'countryId'
       });
    };

    return User;

};
