const express = require('express');
const router = express.Router();

const clienteRouters = require("./clientes")
const enderecoRouters = require("./enderecos")

router.use("/clientes", clienteRouters);
router.use("/enderecos", enderecoRouters);

module.exports = router;