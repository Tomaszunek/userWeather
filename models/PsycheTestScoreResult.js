module.exports = function(sequelize, Sequelize) {

    var PsycheTestScoreResult = sequelize.define('PsycheTestScoreResult', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        psycheTypeId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        mind: {
            type: Sequelize.STRING,
            allowNull: false
        },

        energy: {
            type: Sequelize.STRING,
            allowNull: false
        },

        nature: {
            type: Sequelize.STRING,
            allowNull: false
        },

        tactict: {
            type: Sequelize.STRING,
            allowNull: false
        },

        indentity: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    PsycheTestScoreResult.associate = function (models) {
      PsycheTestScoreResult.belongsTo(models.PsycheType, {
        as: 'PsycheTestScoreResult',
        foreignKey: 'psycheTypeId'
      });
    };

    return PsycheTestScoreResult;

};
