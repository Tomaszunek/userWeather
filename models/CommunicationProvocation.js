module.exports = function(sequelize, Sequelize) {

    var CommunicationProvocation = sequelize.define('CommunicationProvocation', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        provocationImage: {
            type: Sequelize.STRING,
            allowNull: false
        },

        provocationMassage: {
            type: Sequelize.STRING,
            allowNull: false
        },

        provocationTypeId: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    })
    CommunicationProvocation.associate = function (models) {
      CommunicationProvocation.hasOne(models.CommunicationProvocationToken, {
         as: 'CommunicationProvocationToken',
         foreignKey: 'provocationId'
     });

       CommunicationProvocation.hasOne(models.CommunicationFiltrTypeQuestion, {
          as: 'CommunicationProvocationTypeQuestion',
          foreignKey: 'provocationTypeId'
      });
    };

    return CommunicationProvocation;

}
