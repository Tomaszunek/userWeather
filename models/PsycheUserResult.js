module.exports = function(sequelize, Sequelize) {

    var PsycheUserResult = sequelize.define('PsycheUserResult', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        userId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        typeId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        score: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });
    PsycheUserResult.associate = function (models) {
      PsycheUserResult.belongsTo(models.User, {
        as: 'PsycheUserResult',
        foreignKey: 'userId'
      }),
      PsycheUserResult.belongsTo(models.PsycheType, {
        as: 'PsycheResultType',
        foreignKey: 'typeId'
      });
    };

    return PsycheUserResult;

};
