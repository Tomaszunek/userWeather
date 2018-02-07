module.exports = function(sequelize, Sequelize) {

    var FaqQuestion = sequelize.define('FaqQuestion', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        categoryId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        questionTitle: {
            type: Sequelize.TEXT,
            allowNull: false
        },

        questionName: {
            type: Sequelize.TEXT,
            allowNull: false
        },

        questionAnswer: {
            type: Sequelize.TEXT,
            allowNull: false
        }

    });
    FaqQuestion.associate = function (models) {
      FaqQuestion.belongsTo(models.FaqCaterory, {
         as: 'FaqQuestionCategory',
         foreignKey: 'categoryId'
      });

    };
    return FaqQuestion;

};
