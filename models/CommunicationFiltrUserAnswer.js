module.exports = function(sequelize, Sequelize) {

    var CommunicationFiltrUserAnswer = sequelize.define('CommunicationFiltrUserAnswer', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        userId1: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        userId2: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        flirtQuestionId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        flirtTime: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        isNewFlirt: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },

        answerNum: {
            type: Sequelize.INTEGER,
            allowNull: false
        }

    });
    CommunicationFiltrUserAnswer.associate = function (models) {
      CommunicationFiltrUserAnswer.belongsTo(models.User, {
       through: 'CommunicationFiltrUserAnswer1',
       foreignKey: 'userId1'
     });

      CommunicationFiltrUserAnswer.belongsTo(models.User, {
       through: 'CommunicationFiltrUserAnswer2',
       foreignKey: 'userId2'
     });

     CommunicationFiltrUserAnswer.belongsTo(models.CommunicationFlirtQuestion, {
      through: 'CommunicationFiltrQuestion',
      foreignKey: 'flirtQuestionId'
    });
    };

    return CommunicationFiltrUserAnswer;

};
