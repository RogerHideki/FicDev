const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { UsuarioModel } = require('../models/usuario-model');
const { TOKEN_SECRET, SALT } = require('../../environments');

class SignupUsuarioController {
    async signup(request, response) {
        try {
            const { nome, email, senha } = request.body;

            if (!nome || !email || !senha) {
                return response.status(400).json({
                    error: 'Nome, email e senha são obrigatórios!'
                });
            }

            const senhaHashed = await bcrypt.hash(senha, SALT);

            const usuario = await UsuarioModel.create({
                nome,
                email,
                senha: senhaHashed,
            });

            if (!usuario) {
                return response.status(400).json({
                    error: 'Houve um erro ao criar usuário'
                });
            }

            const accessToken = jwt.sign(
                { id: usuario.id },
                TOKEN_SECRET,
                { expiresIn: '30m' }
            );

            return response.status(201).json({
                accessToken
            });
        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            });
        }
    }
}

module.exports = new SignupUsuarioController();
