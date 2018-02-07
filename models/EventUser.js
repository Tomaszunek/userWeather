module.exports = function(sequelize, Sequelize) {

    var EventUser = sequelize.define('EventUser', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        eventTypeId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        createdByUserId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        locationId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        eventTitle: {
            type: Sequelize.TEXT,
            allowNull: false
        },

        eventDescription: {
            type: Sequelize.TEXT,
            allowNull: false
        },

        startDate: {
            type: Sequelize.DATE,
            allowNull: false
        },

        endDate: {
            type: Sequelize.DATE,
            allowNull: false
        },

        image: {
            type: Sequelize.TEXT,
            allowNull: false
        }

    });
    EventUser.associate = function (models) {
      EventUser.belongsTo(models.EventType, {
         as: 'EventUserType',
         foreignKey: 'eventTypeId'
      });

      EventUser.belongsTo(models.Locations, {
         as: 'EventUserLocation',
         foreignKey: 'locationId'
      });

      EventUser.belongsTo(models.User, {
         as: 'EventUserCreatedUser',
         foreignKey: 'createdByUserId'
      });

      EventUser.hasOne(models.EventUserConn, {
         as: 'EventUserEventUserConn',
         foreignKey: 'eventId'
      });

      EventUser.belongsTo(models.EventInvite, {
         as: 'EventUserEventInvite',
         foreignKey: 'eventId'
      });

    };
    return EventUser;

};
