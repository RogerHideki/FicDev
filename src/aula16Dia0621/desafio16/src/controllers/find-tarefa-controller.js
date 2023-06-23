const { TarefaModel } = require('../models/tarefa-model');

class findTarefaController {
    async find(request, response) {
        try {
            const { id } = request.params

            const tarefa = await TarefaModel.findAll({
                where: {
                    id: parseInt(id),
                },
            });

            if (tarefa.length == 0) {
                return response.status(404).json({
                    error: 'Tarefa não encontrada!'
                });
            }

            return response.status(200).json(tarefa);
        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            })
        }
    }
}

module.exports = new findTarefaController();
