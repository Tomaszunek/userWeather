module.exports = function(sequelize, Sequelize) {

    var EventInvite = sequelize.define('EventInvite', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        eventId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        userId1: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        userId2: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        inviteDate: {
            type: Sequelize.DATE,
            allowNull: false
        }
    });
    EventInvite.associate = function (models) {
      EventInvite.belongsTo(models.User, {
         as: 'EventUserConnUser1',
         foreignKey: 'userId1'
      });

      EventInvite.belongsTo(models.User, {
         as: 'EventUserConnUser2',
         foreignKey: 'userId2'
      });

      EventInvite.hasOne(models.EventUser, {
         as: 'EventUserConnEventUser',
         foreignKey: 'eventId'
      });

    };
    return EventInvite;

};
