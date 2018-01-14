module.exports = function(sequelize, Sequelize) {

    var PsycheUserAnswer = sequelize.define('PsycheUserAnswer', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        userId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        psycheQuestionId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        psycheAnswerId: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });
    PsycheUserAnswer.associate = function (models) {

    };

    return PsycheUserAnswer;

};
