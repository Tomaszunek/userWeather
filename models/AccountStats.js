module.exports = function(sequelize, Sequelize) {

    var AccountStats = sequelize.define('AccountStats', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        userId: {
          type: Sequelize.INTEGER,
          allowNull: false
        },

        field1: {
            type: Sequelize.STRING,
            allowNull: false
        },

        field2: {
            type: Sequelize.STRING,
            allowNull: false
        },

        field3: {
          type: Sequelize.TEXT,
          allowNull: false
        }


    });
    AccountStats.associate = function (models) {
      AccountStats.belongsTo(models.User, {
         as: 'NotificationsUser',
         foreignKey: 'userId'
     });

    };
    return AccountStats;

};
