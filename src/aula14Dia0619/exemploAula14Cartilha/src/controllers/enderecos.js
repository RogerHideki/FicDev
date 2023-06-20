const express = require('express')
const router = express.Router()

const Endereco = require("../models/Enderecos")

router.get('/', async (req, res) => {
    try {
        const enderecos = await Endereco.findAll({
            attributes: { exclude: ["senha"] }
        });
        res.status(200).json(enderecos);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro interno do servidor");
    }
});

router.get('/:id', async (req, res) => {
    try {
        const endereco = await Endereco.findByPk(req.params.id, {
            attributes: { exclude: ["senha", "id"] }
        });
        res.status(200).json(endereco);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro interno do servidor");
    }
});

router.post('/', async (req, res) => {
    try {
        const endereco = await Endereco.create(req.body);
        res.status(201).json(endereco);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro interno do servidor");
    }
});

router.put('/:id', async (req, res) => {
    try {
        const endereco = await Endereco.findByPk(req.params.id);
        if (!endereco) {
            return res.status(404).json({ error: 'Endereco não encontrado' });
        }
        const updatedEndereco = await endereco.update(req.body);
        res.json(updatedEndereco);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Erro ao atualizar o endereco' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const endereco = await Endereco.findByPk(req.params.id);
        if (!endereco) {
            return res.status(404).send("Endereco não encontrado");
        }
        await endereco.destroy();
        res.sendStatus(204);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro interno do servidor");
    }
});

module.exports = router