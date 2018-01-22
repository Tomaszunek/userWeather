module.exports = function(sequelize, Sequelize) {

    var PsycheTestName = sequelize.define('PsycheTestName', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        psycheTestName: {
            type: Sequelize.TEXT,
            allowNull: false
        },

        psycheTestDescription: {
          type: Sequelize.TEXT,
          allowNull: false
        }
    });
    PsycheTestName.associate = function (models) {
       PsycheTestName.hasOne(models.PsycheQuestion, {
          as: 'PsycheTestNameQuestion',
          foreignKey: 'psycheTestId'
      });
    };

    return PsycheTestName;

};
