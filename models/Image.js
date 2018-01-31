module.exports = function(sequelize, Sequelize) {

    var Image = sequelize.define('Image', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        path: {
            type: Sequelize.STRING,
            allowNull: false
        },

        parentType: {
            type: Sequelize.STRING,
            allowNull: false
        },

        parentId: {
            type: Sequelize.STRING,
            allowNull: false
        },

        sort: {
          type: Sequelize.INTEGER,
          allowNull: false
        },

        description: {
          type: Sequelize.TEXT,
          allowNull: false
        },

        mainImage: {
          type: Sequelize.BOOLEAN,
          allowNull: false
        },

        name: {
          type: Sequelize.TEXT,
          allowNull: false
        }


    });
    Image.associate = function (models) {

    };
    return Image;

};
