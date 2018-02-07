module.exports = function(sequelize, Sequelize) {

    var EventUserConn = sequelize.define('EventUserConn', {

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

        engageDate: {
            type: Sequelize.DATE,
            allowNull: false
        }
    });
    EventUserConn.associate = function (models) {
      EventUserConn.belongsTo(models.User, {
         as: 'EventUserConnUser1',
         foreignKey: 'userId1'
      });

      EventUserConn.belongsTo(models.User, {
         as: 'EventUserConnUser2',
         foreignKey: 'userId2'
      });

      EventUserConn.belongsTo(models.EventUser, {
         as: 'EventUserConnEventUser',
         foreignKey: 'eventId'
      });

    };
    return EventUserConn;

};
