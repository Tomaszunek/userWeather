module.exports = function(sequelize, Sequelize) {

    var CommunicationFavoriteUser = sequelize.define('CommunicationFavoriteUser', {

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

        favoriteTime: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        favoriteMassage: {
          type: Sequelize.TEXT,
          allowNull: false
        }
    });
    CommunicationFavoriteUser.associate = function (models) {
        CommunicationFavoriteUser.belongsTo(models.User, {
         through: 'CommunicationFavoriteUser1',
         foreignKey: 'userId1'
       });

        CommunicationFavoriteUser.belongsTo(models.User, {
         through: 'CommunicationFavoriteUser2',
         foreignKey: 'userId2'
       });
    };

    return CommunicationFavoriteUser;

};
