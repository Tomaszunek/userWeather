module.exports = function(sequelize, Sequelize) {

    var CommunicationProvocation = sequelize.define('CommunicationProvocation', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        provocationTypeId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        provocationImage: {
            type: Sequelize.STRING,
            allowNull: false
        },

        provocationMassage: {
            type: Sequelize.STRING,
            allowNull: false
        }

    });
    CommunicationProvocation.associate = function (models) {
      CommunicationProvocation.hasOne(models.CommunicationProvocationToken, {
         as: 'CommunicationProvocationToken',
         foreignKey: 'provocationId'
     });

       CommunicationProvocation.belongsTo(models.CommunicationFlirtTypeQuestion, {
          as: 'CommunicationProvocationType',
          foreignKey: 'provocationTypeId'
      });
    };

    return CommunicationProvocation;

};
