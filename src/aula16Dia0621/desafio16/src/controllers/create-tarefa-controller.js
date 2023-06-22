const { TarefaModel } = require('../models/tarefa-model');

class CreateTarefaController {
    async create(request, response) {
        try {
            const { usuarioId } = request;
            const { descricao } = request.body;

            if (!descricao) {
                return response.status(400).json({
                    error: 'Descrição é obrigatória!'
                });
            }

            const tarefaExiste = await TarefaModel.findOne({
                where: { descricao }
            });

            if (tarefaExiste) {
                return response.status(400).json({
                    error: 'Tarefa já cadastrada!'
                });
            }

            const tarefa = await TarefaModel.create({
                descricao,
                usuarioId
            });

            return response.status(201).json(tarefa);
        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            })
        }
    }
}

module.exports = new CreateTarefaController();
