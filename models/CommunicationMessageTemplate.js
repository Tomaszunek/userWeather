module.exports = function(sequelize, Sequelize) {

    var CommunicationMessageTemplate = sequelize.define('CommunicationMessageTemplate', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        massageText: {
            type: Sequelize.STRING,
            allowNull: false
        },

        massageType: {
            type: Sequelize.STRING,
            allowNull: false
        }

    })
    CommunicationMessageTemplate.associate = function (models) {

    };

    return CommunicationMessageTemplate;

}
