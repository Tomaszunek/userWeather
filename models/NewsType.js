module.exports = function(sequelize, Sequelize) {

    var NewsType = sequelize.define('NewsType', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        title: {
            type: Sequelize.TEXT,
            allowNull: false
        },

        description: {
            type: Sequelize.TEXT,
            allowNull: false
        },

        order: {
          type: Sequelize.TEXT,
          allowNull: false
        },

        slug: {
          type: Sequelize.TEXT,
          allowNull: false
        }


    });
    NewsType.associate = function (models) {
      NewsType.hasOne(models.News, {
         as: 'NewsTypeNews',
         foreignKey: 'newsTypeId'
     });

    };
    return NewsType;

};
