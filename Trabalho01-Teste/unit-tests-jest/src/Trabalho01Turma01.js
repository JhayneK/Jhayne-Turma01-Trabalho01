class GerenciadorDeTarefas {
    /**
     * Cria um novo gerenciador de tarefas.
     * O gerenciador de tarefas inicializa com uma lista de tarefas vazia.
     */
    constructor() {
        this.tarefas = [];
    }

    /**
     * Adiciona uma tarefa ao gerenciador de tarefas.
     * A tarefa adicionada deve ter uma descri o com mais de 3 caracteres.
     * Caso a descri o tenha 3 caracteres ou menos, lan a um erro.
     * @param {Object} tarefa A tarefa a ser adicionada.
     * @throws {Error} Se a descri o da tarefa for menor ou igual a 3 caracteres.
     */
    adicionarTarefa(tarefa) {
        if (tarefa.descricao.length <= 3) {
            throw new Error('Erro ao cadastrar tarefa');
        }
        this.tarefas.push(tarefa);
    }

    /**
     * Remove uma tarefa do gerenciador de tarefas.
     * A tarefa  removida  a que tem o id igual ao id passado como par metro.
     * @param {number} id O id da tarefa a ser removida.
     */
    removerTarefa(id) {
        this.tarefas = this.tarefas.filter(tarefa => tarefa.id !== id);
    }

    /**
     * Busca uma tarefa pelo id.
     * Retorna a tarefa se encontrada, caso contr rio, retorna undefined.
     * @param {number} id O id da tarefa a ser buscada.
     * @returns {Object|undefined} A tarefa encontrada, caso contr rio, undefined.
     */
    buscarTarefaPorId(id) {
        return this.tarefas.find(tarefa => tarefa.id === id);
    }

    /**
     * Atualiza uma tarefa existente no gerenciador de tarefas.
     * Se a tarefa for encontrada, atualiza seus dados com os novos dados
     * passados como par metro.
     * @param {number} id O id da tarefa a ser atualizada.
     * @param {Object} novosDados Os novos dados da tarefa.
     */
    atualizarTarefa(id, novosDados) {
        const index = this.tarefas.findIndex(tarefa => tarefa.id === id);
        if (index !== -1) {
            this.tarefas[index] = { ...this.tarefas[index], ...novosDados };
        }
    }

    /**
     * Retorna a lista completa de tarefas do gerenciador.
     * @returns {Object[]} A lista de tarefas.
     */
    listarTarefas() {
        return this.tarefas;
    }

    /**
     * Retorna a quantidade total de tarefas no gerenciador.
     * @returns {number} A quantidade de tarefas.
     */
    contarTarefas() {
        return this.tarefas.length;
    }

    /**
     * Marca uma tarefa como concluida no gerenciador.
     * Busca a tarefa pelo id e marca como concluida.
     * @param {number} id O id da tarefa a ser marcada como concluida.
     */
    marcarTarefaComoConcluida(id) {
        const tarefa = this.buscarTarefaPorId(id);
        if (tarefa) {
            tarefa.concluida = true;
        }
    }

    /**
     * Retorna a lista de tarefas concluidas do gerenciador.
     * @returns {Object[]} A lista de tarefas concluidas.
     */
    listarTarefasConcluidas() {
        return this.tarefas.filter(tarefa => tarefa.concluida);
    }

    /**
     * Retorna a lista de tarefas pendentes do gerenciador.
     * @returns {Object[]} A lista de tarefas pendentes.
     */
    listarTarefasPendentes() {
        return this.tarefas.filter(tarefa => !tarefa.concluida);
    }

    /**
     * Remove todas as tarefas concluidas do gerenciador.
     * Essa opera o  irrevers vel e n o pode ser desfeita.
     */
    removerTarefasConcluidas() {
        this.tarefas = this.tarefas.filter(tarefa => !tarefa.concluida);
    }

    /**
     * Busca uma tarefa pelo termo na descri o.
     * Retorna a lista de tarefas que cont m o termo passado como par metro na descri o.
     * @param {string} descricao O termo a ser buscado na descri o.
     * @returns {Object[]} A lista de tarefas que cont m o termo na descri o.
     */
    buscarTarefaPorDescricao(descricao) {
        return this.tarefas.filter(tarefa => tarefa.descricao.includes(descricao));
    }

    /**
     * Adiciona uma tag  uma tarefa existente no gerenciador de tarefas.
     * Se a tarefa for encontrada, adiciona a tag  lista de tags da tarefa.
     * @param {number} id O id da tarefa a ser atualizada.
     * @param {string} tag A tag a ser adicionada.
     */
    adicionarTagATarefa(id, tag) {
        const tarefa = this.buscarTarefaPorId(id);
        if (tarefa) {
            tarefa.tags = tarefa.tags || [];
            tarefa.tags.push(tag);
        }
    }

    /**
     * Remove uma tag de uma tarefa existente no gerenciador de tarefas.
     * Se a tarefa for encontrada, remove a tag da lista de tags da tarefa.
     * @param {number} id O id da tarefa a ser atualizada.
     * @param {string} tag A tag a ser removida.
     */
    removerTagDaTarefa(id, tag) {
        const tarefa = this.buscarTarefaPorId(id);
        if (tarefa && tarefa.tags) {
            tarefa.tags = tarefa.tags.filter(t => t !== tag);
        }
    }

    /**
     * Retorna a lista de tarefas que possuem a tag passada como par metro.
     * @param {string} tag A tag a ser buscada nas tarefas.
     * @returns {Object[]} A lista de tarefas que cont m a tag.
     */
    listarTarefasPorTag(tag) {
        return this.tarefas.filter(tarefa => tarefa.tags && tarefa.tags.includes(tag));
    }

    /**
     * Retorna a lista de tarefas que possuem a data passada como par metro.
     * @param {string} data A data a ser buscada nas tarefas.
     * @returns {Object[]} A lista de tarefas que cont m a data.
     */
    buscarTarefasPorData(data) {
        return this.tarefas.filter(tarefa => tarefa.data === data);
    }

    /**
     * Atualiza a prioridade de uma tarefa existente no gerenciador de tarefas.
     * Se a tarefa for encontrada, atualiza a prioridade da tarefa.
     * @param {number} id O id da tarefa a ser atualizada.
     * @param {number} novaPrioridade A nova prioridade da tarefa.
     */
    atualizarPrioridade(id, novaPrioridade) {
        const tarefa = this.buscarTarefaPorId(id);
        if (tarefa) {
            tarefa.prioridade = novaPrioridade;
        }
    }

    /**
     * Retorna a lista de tarefas que possuem a prioridade passada como par metro.
     * @param {number} prioridade A prioridade a ser buscada nas tarefas.
     * @returns {Object[]} A lista de tarefas que cont m a prioridade.
     */
    listarTarefasPorPrioridade(prioridade) {
        return this.tarefas.filter(tarefa => tarefa.prioridade === prioridade);
    }

    /**
     * Retorna a quantidade de tarefas que possuem a prioridade passada como par metro.
     * @param {number} prioridade A prioridade a ser buscada nas tarefas.
     * @returns {number} A quantidade de tarefas que cont m a prioridade.
     */
    contarTarefasPorPrioridade(prioridade) {
        return this.tarefas.filter(tarefa => tarefa.prioridade === prioridade).length;
    }

    /**
     * Marca todas as tarefas como conclu das.
     */
    marcarTodasComoConcluidas() {
        this.tarefas.forEach(tarefa => {
            tarefa.concluida = true;
        });
    }

    /**
     * Reabre uma tarefa conclu da.
     * Busca uma tarefa pelo id e marca como n o conclu da.
     * @param {number} id O id da tarefa a ser reaberta.
     */
    reabrirTarefa(id) {
        const tarefa = this.buscarTarefaPorId(id);
        if (tarefa) {
            tarefa.concluida = false;
        }
    }

    /**
     * Ordena as tarefas por data, em ordem crescente.
     */
    ordenarTarefasPorData() {
        this.tarefas.sort((a, b) => new Date(a.data) - new Date(b.data));
    }

    /**
     * Ordena as tarefas por prioridade, em ordem crescente.
     */
    ordenarTarefasPorPrioridade() {
        this.tarefas.sort((a, b) => a.prioridade - b.prioridade);
    }
}

module.exports = GerenciadorDeTarefas;