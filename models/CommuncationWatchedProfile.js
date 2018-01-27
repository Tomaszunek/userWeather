module.exports = function(sequelize, Sequelize) {

    var CommunicationWatchedProfile = sequelize.define('CommunicationWatchedProfile', {

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

        watchedTime: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        newWatch: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        }

    })
    CommunicationWatchedProfile.associate = function (models) {
        CommunicationWatchedProfile.belongsTo(models.User, {
         through: 'CommunicationWatchedUser1',
         foreignKey: 'userId1'
       });

        CommunicationWatchedProfile.belongsTo(models.User, {
         through: 'CommunicationWatchedUser2',
         foreignKey: 'userId2'
       });
    };

    return CommunicationWatchedProfile;

}
