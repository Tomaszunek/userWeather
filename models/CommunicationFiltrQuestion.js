module.exports = function(sequelize, Sequelize) {

    var CommunicationFlirtQuestion = sequelize.define('CommunicationFlirtQuestion', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        flirtTypeId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        questionText: {
            type: Sequelize.TEXT,
            allowNull: false
        },

        answer1: {
            type: Sequelize.TEXT,
            allowNull: false
        },

        answer2: {
            type: Sequelize.TEXT,
            allowNull: false
        },

        answer3: {
            type: Sequelize.TEXT,
            allowNull: false
        },

        answer4: {
            type: Sequelize.TEXT,
            allowNull: false
        }

    });
    CommunicationFlirtQuestion.associate = function (models) {
        CommunicationFlirtQuestion.belongsTo(models.CommunicationFlirtTypeQuestion, {
         through: 'CommunicationFlirtTypeQuestion',
         foreignKey: 'flirtTypeId'
       });
    };

    return CommunicationFlirtQuestion;

};
