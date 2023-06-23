const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { UserModel } = require('../models/user-model');
const { TOKEN_SECRET, SALT } = require('../../environments');

class SignupUserController {
    async signup(request, response) {
        try {
            const { nome, senha } = request.body;

            if (!nome || !senha) {
                return response.status(400).json({
                    error: 'Nome e senha são obrigatórios!'
                });
            }

            const senhaHashed = await bcrypt.hash(senha, SALT);

            const user = await UserModel.create({
                nome,
                senha: senhaHashed
            });

            if (!user) {
                return response.status(400).json({
                    error: 'Houve um erro ao criar usuário'
                });
            }

            const accessToken = jwt.sign(
                { id: user.id },
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

module.exports = new SignupUserController();
