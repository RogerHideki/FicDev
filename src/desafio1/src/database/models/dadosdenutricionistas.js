'use strict';
module.exports = (sequelize, DataTypes) => {
  const DadosDeNutricionistas = sequelize.define('DadosDeNutricionistas', {
    nome: {
      primaryKey: true,
      type: DataTypes.STRING,
      allowNull: false
    },
    crn: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    uf: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  return DadosDeNutricionistas;
};