const { TarefaModel } = require('../models/tarefa-model');

class UpdateTarefaController {
    async update(request, response) {
        try {
            const { usuarioId } = request;
            const { id } = request.params
            const { descricao } = request.body

            if (!descricao) {
                return response.status(400).json({
                    error: 'Descrição é obrigatória!'
                });
            }

            const tarefaExiste = await TarefaModel.findOne({
                where: { id }
            });

            if (!tarefaExiste) {
                return response.status(404).json({
                    error: 'Tarefa não encontrada!'
                });
            }

            const tarefa = await TarefaModel.update({
                descricao,
                usuarioId
            }, {
                where: {
                    id: parseInt(id),
                },
            })

            return response.status(200).json({ msg: 'Dados alterados com sucesso.' });
        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            })
        }
    }
}

module.exports = new UpdateTarefaController();
