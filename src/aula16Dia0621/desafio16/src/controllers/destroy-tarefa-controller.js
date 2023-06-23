const { TarefaModel } = require('../models/tarefa-model');

class DestroyTarefaController {
    async destroy(request, response) {
        try {
            const { id } = request.params

            const tarefaExiste = await TarefaModel.findOne({
                where: { id }
            });

            if (!tarefaExiste) {
                return response.status(404).json({
                    error: 'Tarefa não encontrada!'
                });
            }

            const tarefa = await TarefaModel.destroy({
                where: {
                    id: parseInt(id),
                },
            })

            return response.status(200).json({ msg: 'Tarefa excluida com sucesso.' });
        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            })
        }
    }
}

module.exports = new DestroyTarefaController();
