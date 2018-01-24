module.exports = function(sequelize, Sequelize) {

    var PsycheType = sequelize.define('PsycheType', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        psycheTestId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        psycheType: {
            type: Sequelize.TEXT,
            allowNull: false
        }
    });
    PsycheType.associate = function (models) {
      PsycheType.hasOne(models.PsycheTestName, {
        as: 'PsycheTypeTest',
        foreignKey: 'psycheTypeId'
      }),
      PsycheType.hasOne(models.PsycheUserResult, {
        as: 'PsycheTypeResult',
        foreignKey: 'psycheTypeId'
      }),
      PsycheType.hasOne(models.PsycheTypeDesc, {
         as: 'PsycheTypeDesc',
         foreignKey: 'psycheTypeId'
      }),
      PsycheType.hasOne(models.PsycheRelationConnection, {
        as: 'PsycheTypeConnection1',
        foreignKey: 'psycheTypeId1'
      }),
      PsycheType.hasOne(models.PsycheRelationConnection, {
         as: 'PsycheTypeConnection2',
         foreignKey: 'psycheTypeId2'
      }),
      PsycheType.hasOne(models.PsycheTestScoreResult, {
          as: 'PsycheTypeScoreResult',
          foreignKey: 'psycheTypeId'
      });
    };

    return PsycheType;

};
