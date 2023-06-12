(async () => {
    const Sequelize = require('sequelize');
    const Op = Sequelize.Op;
    const database = require('./db');
    const Produto = require('./produto');
    await database.sync();
})();