module.exports = function(sequelize, Sequelize) {

    var User = sequelize.define('User', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        username: {
            type: Sequelize.TEXT,
            allowNull: false
        }

    });
    User.associate = function (models) {

      User.hasOne(models.PsycheUserResult, {
         as: 'UserPsycheResult',
         foreignKey: 'userId'
       }),

       User.hasOne(models.PsycheUserAnswer, {
          as: 'UserPsycheAnswer',
          foreignKey: 'userId'
      });
      
    };

    return User;

};
