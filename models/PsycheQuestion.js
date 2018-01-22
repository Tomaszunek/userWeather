module.exports = function(sequelize, Sequelize) {

    var PsycheQuestion = sequelize.define('PsycheQuestion', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        psycheTestId: {
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
         foreignKey: 'psycheQuestionId'
       }),
      PsycheQuestion.hasOne(models.PsycheAnswer, {
         as: 'PsycheQuestionAnswer',
         foreignKey: 'psycheQuestionId'
       }),
       PsycheQuestion.belongsTo(models.PsycheTestName, {
          as: 'PsycheQuestionTestName',
          foreignKey: 'psycheTestId'
      });
    };

    return PsycheQuestion;

};
