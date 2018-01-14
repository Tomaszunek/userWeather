module.exports = function(sequelize, Sequelize) {

    var PsycheUserResult = sequelize.define('PsycheUserResult', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        userId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        psycheTypeId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        score: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });
    PsycheUserResult.associate = function (models) {

    };

    return PsycheUserResult;

};
