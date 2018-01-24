module.exports = function(sequelize, Sequelize) {

    var PsycheTypeDesc = sequelize.define('PsycheTypeDesc', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        typeId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        descriptionName: {
            type: Sequelize.TEXT,
            allowNull: false
        },

        descriptionBodyShort: {
            type: Sequelize.TEXT,
            allowNull: false
        },

        descriptionBody: {
            type: Sequelize.TEXT,
            allowNull: false
        }
    });
    PsycheTypeDesc.associate = function (models) {
     PsycheTypeDesc.belongsTo(models.PsycheType, {
        as: 'PsycheTestNameDesc',
        foreignKey: 'typeId'
      });
    };

    return PsycheTypeDesc;

};
