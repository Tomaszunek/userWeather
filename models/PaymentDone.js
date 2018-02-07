module.exports = function(sequelize, Sequelize) {

    var PaymentDone = sequelize.define('PaymentDone', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        userId: {
            forgeinKey: true,
            type: Sequelize.INTEGER
        },

        paymentId: {
            forgeinKey: true,
            type: Sequelize.INTEGER
        },

        paymentDate: {
            type: Sequelize.DATE,
            allowNull: false
        },

        paymentEnd: {
            type: Sequelize.DATE,
            allowNull: false
        },

        payDate: {
            type: Sequelize.DATE,
            allowNull: false
        },

        payNumber: {
            type: Sequelize.DATE,
            allowNull: false
        }

    });
    PaymentDone.associate = function (models) {
        PaymentDone.belongsTo(models.User, {
         through: 'PaymentDoneUser',
         foreignKey: 'userId'
       });

        PaymentDone.belongsTo(models.Payment, {
         through: 'PaymentDone',
         foreignKey: 'paymentId'
       });


    };
    return PaymentDone;

};
