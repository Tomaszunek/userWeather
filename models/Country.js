module.exports = function(sequelize, Sequelize) {

    var Country = sequelize.define('Country', {

        id: {
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },

        sortname: {
          type: Sequelize.TEXT,
          allowNull: false
        },

        name: {
          type: Sequelize.TEXT,
          allowNull: false
        },

        phonecode: {
          type: Sequelize.INTEGER,
          allowNull: false
        }
    });
    Country.associate = function (models) {
      Country.hasOne(models.User, {
        as: 'CountryUser',
        foreignKey: 'countryId'
      });
    };

    return Country;

};
