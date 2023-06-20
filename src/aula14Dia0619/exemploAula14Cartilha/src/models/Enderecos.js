const { Sequelize, Model } = require('sequelize');

class Enderecos extends Model {
    static init(sequelize) {
        super.init(
            {
                cep: Sequelize.STRING,
                logradouro: Sequelize.STRING,
                complemento: Sequelize.STRING,
                bairro: Sequelize.STRING,
                localidade: Sequelize.STRING,
                uf: Sequelize.STRING,
                cliente_id: Sequelize.INTEGER
            },
            {
                sequelize,
            }
        );
    }
    static associate(models) {
        this.belongsTo(models.Clientes, { foreignKey: "cliente_id" });
    }
}

module.exports = Enderecos;