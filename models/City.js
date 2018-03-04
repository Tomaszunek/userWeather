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

        cityLat: {
          type: Sequelize.FLOAT,
          allowNull: false
        },

        cityLng: {
          type: Sequelize.FLOAT,
          allowNull: false
        },

    });
    City.associate = function (models) {
    };

    return City;

};
