const { TarefaModel } = require('../models/tarefa-model');

class CreateTarefaController {
    async create(request, response) {
        try {
            const { user_owner } = request;
            const { descricao, dataprevistatermino,  } = request.body;

            if (!descricao && dataprevistatermino) {
                return response.status(400).json({
                    error: 'Descrição e data prevista de término são obrigatórias!'
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
                dataprevistatermino,
                user_owner
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
