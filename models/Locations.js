module.exports = function(sequelize, Sequelize) {

    var Locations = sequelize.define('Locations', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        countryName: {
            type: Sequelize.STRING,
            allowNull: false
        },

        stateName: {
            type: Sequelize.STRING,
            allowNull: false
        },

        cityName: {
            type: Sequelize.STRING,
            allowNull: false
        },

        district: {
            type: Sequelize.STRING,
            allowNull: false
        },

        language: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    Locations.associate = function (models) {


    };
    return Locations;

};
