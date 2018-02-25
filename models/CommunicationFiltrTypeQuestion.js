module.exports = function(sequelize, Sequelize) {

    var CommunicationFlirtTypeQuestion = sequelize.define('CommunicationFlirtTypeQuestion', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        flirtQuestionType: {
            type: Sequelize.TEXT,
            allowNull: false
        },

        order: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        status: {
            type: Sequelize.TEXT,
            allowNull: false
        },

        hot: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },


    });
    CommunicationFlirtTypeQuestion.associate = function (models) {
        CommunicationFlirtTypeQuestion.hasOne(models.CommunicationFlirtQuestion, {
         through: 'CommunicationFlirtQuestionType',
         foreignKey: 'flirtTypeId'
       });

       CommunicationFlirtTypeQuestion.hasOne(models.CommunicationProvocation, {
        through: 'CommunicationTypeProvocation',
        foreignKey: 'provocationTypeId'
      });
    };

    return CommunicationFlirtTypeQuestion;

};