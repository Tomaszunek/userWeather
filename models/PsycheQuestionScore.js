module.exports = function(sequelize, Sequelize) {

    var PsycheQuestionScore = sequelize.define('PsycheQuestionScore', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        psycheQuestionId: {
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
    PsycheQuestionScore.associate = function (models) {
      PsycheQuestionScore.belongsTo(models.PsycheQuestion, {
         as: 'PsycheScoreQuestion',
         foreignKey: 'psycheQuestionId'
     });
    };

    return PsycheQuestionScore;

};
