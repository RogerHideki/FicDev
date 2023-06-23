const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { UserModel } = require('../models/user-model');
const { TOKEN_SECRET } = require('../../environments');

class SigninUserController {
    async signin(request, response) {
        try {
            const { nome, senha } = request.body;

            if (!nome || !senha) {
                return response.status(400).json({
                    error: 'Nome e senha são obrigatórios!'
                });
            }

            const userExiste = await UserModel.findOne({
                where: { nome }
            });

            if (!userExiste) {
                return response.status(400).json({
                    error: 'Usuário não existe!'
                });
            }

            const senhaValida = await bcrypt.compare(senha, userExiste.senha);

            if (!senhaValida) {
                return response.status(400).json({
                    error: 'Senha incorreta!'
                });
            }

            const accessToken = jwt.sign(
                { id: userExiste.id },
                TOKEN_SECRET,
                { expiresIn: '30m' }
            );

            return response.status(200).json({
                accessToken
            });
        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            });
        }
    }
}

module.exports = new SigninUserController();
