module.exports = function(sequelize, Sequelize) {

    var PsycheTestName = sequelize.define('PsycheTestName', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        testName: {
            type: Sequelize.TEXT,
            allowNull: false
        },

        testDescription: {
          type: Sequelize.TEXT,
          allowNull: false
        }
    });
    PsycheTestName.associate = function (models) {
       PsycheTestName.hasOne(models.PsycheQuestion, {
          as: 'PsycheTestNameQuestion',
          foreignKey: 'testId'
      });
      PsycheTestName.hasOne(models.PsycheType, {
         as: 'PsycheTestType',
         foreignKey: 'testId'
     });
    };

    return PsycheTestName;

};
