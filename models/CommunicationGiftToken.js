module.exports = function(sequelize, Sequelize) {

    var CommunicationGiftToken = sequelize.define('CommunicationGiftToken', {

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

        giftId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        giftTime: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        isNewGift: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },

        giftText: {
            type: Sequelize.TEXT,
            allowNull: false
        }

    });
    CommunicationGiftToken.associate = function (models) {
      CommunicationGiftToken.belongsTo(models.User, {
       through: 'CommunicationGiftTokenUser1',
       foreignKey: 'userId1'
     });

      CommunicationGiftToken.belongsTo(models.User, {
       through: 'CommunicationGiftTokenUser2',
       foreignKey: 'userId2'
     });

     CommunicationGiftToken.belongsTo(models.CommunicationGift, {
      through: 'CommunicationGiftTemplate',
      foreignKey: 'giftId'
    });
    };

    return CommunicationGiftToken;

};
