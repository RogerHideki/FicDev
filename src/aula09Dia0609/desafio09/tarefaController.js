const TarefaModel = require('./tarefaModel');
const TarefaView = require('./tarefaView');

class TarefaController {
    constructor() {
        this.tarefas = [];
        this.view = new TarefaView();
    }

    criarTarefa(descricao) {
        const tarefa = new TarefaModel(descricao);
        this.tarefas.push(tarefa);
    }

    listarTarefas() {
        if (this.tarefas.length === 0) this.view.erroImprimirTarefas();
        else {
            this.tarefas.forEach((tarefa, idx) => {
                this.view.imprimirTarefa(idx + 1, tarefa);
            });
        }
    }

    deletarTarefa(id) {
        if (id === '' || isNaN(id) || id < 1 || id > this.tarefas.length) {
            this.view.erroDeletarTarefa();
        } else {
            this.tarefas.splice(id - 1, 1);
        }
    }
}

module.exports = TarefaController;