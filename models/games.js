module.exports = function (sequelize, DataTypes) {
    const Games = sequelize.define("Games", {

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        max_time: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },

        number_of_players: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },

        owned_requested: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },

        userID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    return Games;
}