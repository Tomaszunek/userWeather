module.exports = function(sequelize, Sequelize) {

    var FaqCaterory = sequelize.define('FaqCaterory', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        categoryName: {
            type: Sequelize.TEXT,
            allowNull: false
        }

    });
    FaqCaterory.associate = function (models) {
      FaqCaterory.hasOne(models.FaqQuestion, {
         as: 'FaqCategoryQuestion',
         foreignKey: 'categoryId'
      });

    };
    return FaqCaterory;

};
