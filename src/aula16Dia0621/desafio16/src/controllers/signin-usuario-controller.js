const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { UsuarioModel } = require('../models/usuario-model');
const { TOKEN_SECRET } = require('../../environments');

class SigninUsuarioController {
    async signin(request, response) {
        try {
            const { email, senha } = request.body;

            if (!email || !senha) {
                return response.status(400).json({
                    error: 'Email e senha são obrigatórios!'
                });
            }

            const usuarioExiste = await UsuarioModel.findOne({
                where: { email }
            });

            if (!usuarioExiste) {
                return response.status(400).json({
                    error: 'Usuario não existe!'
                });
            }

            const senhaValida = await bcrypt.compare(senha, usuarioExiste.senha);

            if (!senhaValida) {
                return response.status(400).json({
                    error: 'Senha incorreta!'
                });
            }

            const accessToken = jwt.sign(
                { id: usuarioExiste.id },
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

module.exports = new SigninUsuarioController();
