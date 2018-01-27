module.exports = function(sequelize, Sequelize) {

    var CommunicationMessage = sequelize.define('CommunicationMessage', {

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

        massageText: {
            type: Sequelize.STRING,
            allowNull: false
        },
        
        massageImage: {
            type: Sequelize.STRING,
            allowNull: false
        }

    })
    CommunicationMessage.associate = function (models) {
        CommunicationMessage.belongsTo(models.User, {
         through: 'CommunicationMessageUser1',
         foreignKey: 'userId1'
        })

        CommunicationMessage.belongsTo(models.User, {
         through: 'CommunicationMessageUser2',
         foreignKey: 'userId2'
        })
    };

    return CommunicationMessage;

}
