module.exports = function(sequelize, Sequelize) {

    var UserDetail = sequelize.define('UserDetail', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        userId: {
            forgeinKey: true,
            type: Sequelize.INTEGER
        },

        firstName: {
            type: Sequelize.STRING,
            allowNull: false
        },

        lastName: {
            type: Sequelize.STRING,
            allowNull: false
        },

        gender: {
            type: Sequelize.ENUM('MEN', 'WOMEN'),
            allowNull: true
        },

        cityLive: {
            type: Sequelize.STRING,
            allowNull: false
        },

        address: {
            type: Sequelize.STRING,
            allowNull: false
        },

        birthDay: {
            type: Sequelize.DATE,
            allowNull: false
        }

    })
    UserDetail.associate = function (models) {
        UserDetail.belongsTo(models.User, {
         through: 'UserDetail',
         foreignKey: 'idUser'
        })


    };
    return UserDetail;

}
