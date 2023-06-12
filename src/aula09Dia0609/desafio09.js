const readline = require('readline-sync');

class TarefaModel {
    constructor(id, descricao) {
        this.id = id;
        this.descricao = descricao;
    }
}

class TarefaView {
    static renderMenu() {
        let formaDePagamento;
        do {
            console.log('\n[0] Criar tarefa');
            console.log('[1] Listar tarefas');
            console.log('[2] Deletar tarefa');
            console.log('[3] Sair do programa');
            formaDePagamento = readline.keyIn('\nEscolha uma das opções. [0, 1, 2, 3]: ', { limit: '0123' });

            if (formaDePagamento == 0) {
                let descricao = readline.question('\nDigite uma descrição para a tarefa: ');
                tarefaController.criarTarefa(descricao);
            } else if (formaDePagamento == 1) tarefaController.listarTarefas();
            else if (formaDePagamento == 2) {
                tarefaController.listarTarefas();

                let id = readline.question('\nDigite o ID da tarefa que será deletada: ');

                tarefaController.deletarTarefa(id);
            }

        } while (formaDePagamento != 3);
    }
    static renderTarefa(tarefa) {
        console.log(`ID: ${tarefa.id} - Descrição: ${tarefa.descricao}`);
    }
}

class TarefaController {
    constructor() {
        this.tarefas = [];
        this.idAtual = 0;
    }
    criarTarefa(descricao) {
        const tarefa = new TarefaModel(this.idAtual, descricao);
        this.idAtual++;
        this.tarefas.push(tarefa);
    }
    listarTarefas() {
        this.tarefas.forEach(tarefa => TarefaView.renderTarefa(tarefa));
    }
    deletarTarefa(id) {
        delete this.tarefas[id];
    }
}

const tarefaController = new TarefaController();

TarefaView.renderMenu();