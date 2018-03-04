module.exports = function(sequelize, Sequelize) {

    var City = sequelize.define('City', {

        id: {
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },

        cityName: {
          type: Sequelize.TEXT,
          allowNull: false
        },

        stateId: {
          type: Sequelize.INTEGER,
          allowNull: false
        }
    });
    City.associate = function (models) {
      City.hasOne(models.User, {
        as: 'CountryUser',
        foreignKey: 'cityId'
      });
    };

    return City;

};
