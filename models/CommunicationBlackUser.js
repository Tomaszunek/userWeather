module.exports = function(sequelize, Sequelize) {

    var CommunicationBlackUser = sequelize.define('CommunicationBlackUser', {

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

        blockTime: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        blockMassage: {
          type: Sequelize.TEXT,
          allowNull: false
        }
    });
    CommunicationBlackUser.associate = function (models) {
        CommunicationBlackUser.belongsTo(models.User, {
         through: 'CommunicationBlackUser1',
         foreignKey: 'userId1'
       });

        CommunicationBlackUser.belongsTo(models.User, {
         through: 'CommunicationBlackUser2',
         foreignKey: 'userId2'
       });
    };

    return CommunicationBlackUser;

};
