module.exports = function(sequelize, Sequelize) {

    var PsycheType = sequelize.define('PsycheType', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        testId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        type: {
            type: Sequelize.TEXT,
            allowNull: false
        }
    });
    PsycheType.associate = function (models) {
      PsycheType.belongsTo(models.PsycheTestName, {
        as: 'PsycheTypeTest',
        foreignKey: 'testId'
      }),
      PsycheType.hasOne(models.PsycheUserResult, {
        as: 'PsycheTypeResult',
        foreignKey: 'typeId'
      }),
      PsycheType.hasOne(models.PsycheTypeDesc, {
         as: 'PsycheTypeDesc',
         foreignKey: 'typeId'
      }),
      PsycheType.hasOne(models.PsycheRelationConnection, {
        as: 'PsycheTypeConnection1',
        foreignKey: 'typeId1'
      }),
      PsycheType.hasOne(models.PsycheRelationConnection, {
         as: 'PsycheTypeConnection2',
         foreignKey: 'typeId2'
      }),
      PsycheType.hasOne(models.PsycheTestScoreResult, {
          as: 'PsycheTypeScoreResult',
          foreignKey: 'typeId'
      });
    };

    return PsycheType;

};
