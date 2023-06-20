const express = require('express')
const router = express.Router()

const Cliente = require("../models/Clientes")

router.get('/', async (req, res) => {
    try {
 
        const clientes = await Cliente.findAll({
            attributes: { exclude: ["senha"] }
        });
        res.status(200).json(clientes);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro interno do servidor");
    }
});

router.get('/:id', async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id, {
            attributes: { exclude: ["senha", "id"] }
        });
        res.status(200).json(cliente);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro interno do servidor");
    }
});

router.post('/', async (req, res) => {
    try {
        const cliente = await Cliente.create(req.body);
        res.status(201).json(cliente);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro interno do servidor");
    }
});

router.put('/:id', async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id);
        if (!cliente) {
            return res.status(404).json({ error: 'Cliente não encontrado' });
        }
        const updatedCliente = await cliente.update(req.body);
        res.json(updatedCliente);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Erro ao atualizar o cliente' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id);
        if (!cliente) {
            return res.status(404).send("Cliente não encontrado");
        }
        await cliente.destroy();
        res.sendStatus(204);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro interno do servidor");
    }
});

module.exports = router