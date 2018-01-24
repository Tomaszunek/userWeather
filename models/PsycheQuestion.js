module.exports = function(sequelize, Sequelize) {

    var PsycheQuestion = sequelize.define('PsycheQuestion', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        testId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        order: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        questionName: {
            type: Sequelize.TEXT,
            allowNull: false
        },

        questionBody: {
            type: Sequelize.TEXT,
            allowNull: false
        }
    });
    PsycheQuestion.associate = function (models) {
      PsycheQuestion.hasOne(models.PsycheUserAnswer, {
         as: 'PsycheQuestionUserAnswer',
         foreignKey: 'questionId'
       }),
      PsycheQuestion.hasOne(models.PsycheAnswer, {
         as: 'PsycheQuestionAnswer',
         foreignKey: 'questionId'
       }),
       PsycheQuestion.hasOne(models.PsycheQuestionScore, {
          as: 'PsycheQuestionScore',
          foreignKey: 'questionId'
        }),
       PsycheQuestion.belongsTo(models.PsycheTestName, {
          as: 'PsycheQuestionTestName',
          foreignKey: 'testId'
      });
    };

    return PsycheQuestion;

};
