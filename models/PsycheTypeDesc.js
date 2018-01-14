module.exports = function(sequelize, Sequelize) {

    var PsycheTypeDesc = sequelize.define('PsycheTypeDesc', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        psycheTypeId: {
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

    };

    return PsycheTypeDesc;

};
