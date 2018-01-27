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

        questionId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        answerId: {
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
          foreignKey: 'questionId'
        }),

        PsycheUserAnswer.belongsTo(models.PsycheAnswer, {
           as: 'PsycheTestAnswer',
           foreignKey: 'answerId'
       });

    };

    return PsycheUserAnswer;

};
