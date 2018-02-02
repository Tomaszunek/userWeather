module.exports = function(sequelize, Sequelize) {

    var SystemStats = sequelize.define('SystemStats', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        field1: {
            type: Sequelize.STRING,
            allowNull: false
        },

        field2: {
            type: Sequelize.STRING,
            allowNull: false
        },

        field3: {
          type: Sequelize.TEXT,
          allowNull: false
        }


    });
    SystemStats.associate = function (models) {

    };
    return SystemStats;

};
