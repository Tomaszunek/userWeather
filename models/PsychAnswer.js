module.exports = function(sequelize, Sequelize) {

    var PsycheAnswer = sequelize.define('PsycheAnswer', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        psycheQuestionId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        psycheAnswer: {
          type: Sequelize.TEXT,
          allowNull: false
        },

        answerValue: {
          type: Sequelize.TEXT,
          allowNull: false
        }
    });
    PsycheAnswer.associate = function (models) {
      PsycheAnswer.belongsTo(models.PsycheQuestion, {
         as: 'PsycheAnswerQuestion',
         foreignKey: 'psycheQuestionId'
     });
    };

    return PsycheAnswer;

};
