module.exports = function(sequelize, Sequelize) {

    var State = sequelize.define('State', {

        id: {
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },

        name: {
          type: Sequelize.TEXT,
          allowNull: false
        },

        countryId: {
          type: Sequelize.INTEGER,
          allowNull: false
        }
    });
    State.associate = function (models) {
      State.hasOne(models.User, {
        as: 'StateUser',
        foreignKey: 'stateId'
      });
    };

    return State;

};
