module.exports = function(sequelize, Sequelize) {

    var CommunicationGift = sequelize.define('CommunicationGift', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        giftImage: {
            type: Sequelize.TEXT,
            allowNull: false
        },

        giftTextTemplate: {
            type: Sequelize.TEXT,
            allowNull: false
        },

        order: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        status: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },

        hot: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        }


    });
    CommunicationGift.associate = function (models) {
        CommunicationGift.hasOne(models.CommunicationGiftToken, {
         through: 'CommunicationGift',
         foreignKey: 'giftId'
       });
    };

    return CommunicationGift;

};
