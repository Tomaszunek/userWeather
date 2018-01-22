module.exports = function(sequelize, Sequelize) {

    var PsycheRelationConnection = sequelize.define('PsycheRelationConnection', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        psycheTypeId1: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        psycheTypeId2: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        connectionLevel: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        connectionDescription: {
            type: Sequelize.TEXT,
            allowNull: false
        }

    });
    PsycheRelationConnection.associate = function (models) {
      PsycheRelationConnection.belongsTo(models.PsycheType, {
         as: 'PsycheConnectionType1',
         foreignKey: 'psycheTypeId1'
     }),
     PsycheRelationConnection.belongsTo(models.PsycheType, {
        as: 'PsycheConnectionType2',
        foreignKey: 'psycheTypeId1'
      });
    };

    return PsycheRelationConnection;

};
