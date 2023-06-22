const jwt = require('jsonwebtoken');

const { TOKEN_SECRET } = require('../../environments');

async function authMiddleware(request, response, next) {
    try {
        const accessToken = request.headers.authorization;

        if (accessToken) {
            const token = accessToken.split(' ')[1];
            jwt.verify(token, TOKEN_SECRET, (error, usuario) => {
                if (error) {
                    return response.status(401).json({
                        error: 'Não autorizado!'
                    });
                }

                request.usuarioId = usuario.id;
                next();
            });
        }
    } catch (error) {
        return response.status(500).json({
            error: `Erro interno: ${error}`
        });
    }
}

module.exports = { authMiddleware };
