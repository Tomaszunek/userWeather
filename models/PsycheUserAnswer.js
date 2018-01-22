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
      PsycheUserAnswer.belongsTo(models.User, {
         as: 'PsycheUserAnswer',
         foreignKey: 'userId'
       });

       PsycheUserAnswer.belongsTo(models.PsycheQuestion, {
          as: 'PsycheTestQuestion',
          foreignKey: 'psycheQuestionId'
        }),

        PsycheUserAnswer.belongsTo(models.PsycheAnswer, {
           as: 'PsycheTestAnswer',
           foreignKey: 'psycheAnswerId'
       });

    };

    return PsycheUserAnswer;

};
