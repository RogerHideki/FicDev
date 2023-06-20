const { Sequelize, Model } = require('sequelize');

class Clientes extends Model {
    static init(sequelize) {
        super.init(
            {
                nome: Sequelize.STRING,
                email: Sequelize.STRING,
                senha: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
    }
    static associate(models) {
        this.hasMany(models.Enderecos);
    }
}

module.exports = Clientes;