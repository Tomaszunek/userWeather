module.exports = function(sequelize, Sequelize) {

    var Payment = sequelize.define('Payment', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        paymentTypeName: {
            type: Sequelize.STRING,
            allowNull: false
        },

        pricePerDay: {
            type: Sequelize.FLOAT,
            allowNull: false
        },

        paymentLenght: {
          type: Sequelize.INTEGER,
          allowNull: false
        },

        unlimitedMasages: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },

        privatePhotosUsers: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },

        blackList: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },

        favoriteList: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },

        knowWhoVisitProfile: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },

        gifts: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },

        provocations: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },

        flirt: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },

        limitedPsychConnectons: {
            type: Sequelize.INTEGER,
            allowNull: false
        }

    })
    Payment.associate = function (models) {
        Payment.hasOne(models.PaymentDone, {
         through: 'PaymentDone',
         foreignKey: 'paymentId'
        })


    };
    return Payment;

}
