module.exports = function(sequelize, Sequelize) {

    var News = sequelize.define('News', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        newsTypeId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        title: {
            type: Sequelize.TEXT,
            allowNull: false
        },

        text: {
          type: Sequelize.TEXT,
          allowNull: false
        },

        slug: {
          type: Sequelize.TEXT,
          allowNull: false
        },

        status: {
          type: Sequelize.TEXT,
          allowNull: false
        },

        publicationTime: {
          type: Sequelize.INTEGER,
          allowNull: false
        }


    });
    News.associate = function (models) {
      News.belongsTo(models.NewsType, {
         as: 'NewsNewsType',
         foreignKey: 'newsTypeId'
     });

    };
    return News;

};
