const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { UserModel } = require('../models/user-model');
const { TOKEN_SECRET } = require('../../environments');

class SigninUserController {
    async signin(request, response) {
        try {
            const { name, password } = request.body;

            if (!name || !password) {
                return response.status(400).json({
                    error: 'Nome e senha são obrigatórios!'
                });
            }

            const userExists = await UserModel.findOne({
                where: { name }
            });

            if (!userExists) {
                return response.status(400).json({
                    error: 'Usuario não existe!'
                });
            }

            const isPasswordValid = await bcrypt.compare(password, userExists.password);

            if (!isPasswordValid) {
                return response.status(400).json({
                    error: 'Senha incorreta!'
                });
            }

            const accessToken = jwt.sign(
                { id: userExists.id },
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
