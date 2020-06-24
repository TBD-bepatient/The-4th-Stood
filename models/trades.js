module.exports = function (sequelize, DataTypes) {
    const Trades = sequelize.define("Trades", {

        tradeUser: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        askedGameID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        offeredGameID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    return Trades;
}