module.exports = function(sequelize, Sequelize) {

    var EventType = sequelize.define('EventType', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        eventName: {
            type: Sequelize.STRING,
            allowNull: false
        },

        eventTeritory: {
            type: Sequelize.STRING,
            allowNull: false
        },

        eventMaxCountPerson: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });
    EventType.associate = function (models) {
      EventType.hasOne(models.EventUser, {
         as: 'EventTypeUser',
         foreignKey: 'eventTypeId'
     });

    };
    return EventType;

};
