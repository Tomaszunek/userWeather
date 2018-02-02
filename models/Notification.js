module.exports = function(sequelize, Sequelize) {

    var Notifications = sequelize.define('Notifications', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        userId: {
          type: Sequelize.INTEGER,
          allowNull: false
        },

        parentType: {
            type: Sequelize.STRING,
            allowNull: false
        },

        parentId: {
            type: Sequelize.STRING,
            allowNull: false
        },

        image: {
          type: Sequelize.TEXT,
          allowNull: false
        }


    });
    Notifications.associate = function (models) {
      Notifications.belongsTo(models.User, {
         as: 'NotificationsUser',
         foreignKey: 'userId'
     });

    };
    return Notifications;

};
