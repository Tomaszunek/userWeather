module.exports = function(sequelize, Sequelize) {

    var SearchType = sequelize.define('SearchType', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        searchTypeName: {
            type: Sequelize.STRING,
            allowNull: false
        }


    });
    SearchType.associate = function (models) {

    };
    return SearchType;

};
