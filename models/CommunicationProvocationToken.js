module.exports = function(sequelize, Sequelize) {

    var CommunicationProvocationToken = sequelize.define('CommunicationProvocationToken', {

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

        provocationId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        provocationTime: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        isNewProvocation: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        }

    });
    CommunicationProvocationToken.associate = function (models) {
      CommunicationProvocationToken.belongsTo(models.User, {
       through: 'CommunicationGiftTokenUser1',
       foreignKey: 'userId1'
     });

      CommunicationProvocationToken.belongsTo(models.User, {
       through: 'CommunicationGiftTokenUser2',
       foreignKey: 'userId2'
     });

     CommunicationProvocationToken.belongsTo(models.CommunicationProvocation, {
      through: 'CommunicationProvocation',
      foreignKey: 'provocationId'
    });
    };

    return CommunicationProvocationToken;

};
