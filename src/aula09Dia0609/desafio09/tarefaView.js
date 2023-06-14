class TarefaView {
    constructor() {

    }

    imprimirTarefa(id, tarefa) {
        console.log(`ID: ${id} - Tarefa: ${tarefa.descricao}`);
    }

    erroImprimirTarefas() {
        console.log('\nNão há tarefas.');
    }

    erroDeletarTarefa() {
        console.log('\nID inválido.');
    }
}

module.exports = TarefaView;