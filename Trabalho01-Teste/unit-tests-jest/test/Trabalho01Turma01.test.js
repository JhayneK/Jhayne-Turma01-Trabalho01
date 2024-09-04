const GerenciadorDeTarefas = require('../src/Trabalho01Turma01');

describe('GerenciadorDeTarefas', () => {
    let gerenciador;

    beforeEach(() => {
        gerenciador = new GerenciadorDeTarefas();
    });

    test('deve adicionar uma tarefa válida', () => {
        const tarefa = { id: 1, descricao: 'Comprar pão' };
        gerenciador.adicionarTarefa(tarefa);
        expect(gerenciador.tarefas).toContain(tarefa);
    });

    test('deve lançar erro ao adicionar uma tarefa com descrição menor que 4 caracteres', () => {
        const tarefa = { id: 2, descricao: 'Oi' };
        expect(() => gerenciador.adicionarTarefa(tarefa)).toThrow('Erro ao cadastrar tarefa');
    });

    test('deve remover uma tarefa pelo id', () => {
        const tarefa1 = { id: 1, descricao: 'Tarefa 1' };
        const tarefa2 = { id: 2, descricao: 'Tarefa 2' };

        gerenciador.adicionarTarefa(tarefa1);
        gerenciador.adicionarTarefa(tarefa2);
        gerenciador.removerTarefa(1);

        expect(gerenciador.tarefas).not.toContain(tarefa1);
        expect(gerenciador.tarefas).toContain(tarefa2);
    });
});

describe('GerenciadorDeTarefas', () => {
    let gerenciador;

    beforeEach(() => {
        gerenciador = new GerenciadorDeTarefas();
    });

    test('deve adicionar uma tarefa válida', () => {
        const tarefa = { id: 1, descricao: 'Comprar pão' };
        gerenciador.adicionarTarefa(tarefa);
        expect(gerenciador.tarefas).toContain(tarefa);
    });

    test('deve lançar erro ao adicionar uma tarefa com descrição menor que 4 caracteres', () => {
        const tarefa = { id: 2, descricao: 'Oi' };
        expect(() => gerenciador.adicionarTarefa(tarefa)).toThrow('Erro ao cadastrar tarefa');
    });

    test('deve remover uma tarefa pelo id', () => {
        const tarefa1 = { id: 1, descricao: 'Tarefa 1' };
        const tarefa2 = { id: 2, descricao: 'Tarefa 2' };

        gerenciador.adicionarTarefa(tarefa1);
        gerenciador.adicionarTarefa(tarefa2);
        gerenciador.removerTarefa(1);

        expect(gerenciador.tarefas).not.toContain(tarefa1);
        expect(gerenciador.tarefas).toContain(tarefa2);
    });

    test('deve buscar tarefa por id', () => {
        const tarefa = { id: 3, descricao: 'Buscar tarefa' };
        gerenciador.adicionarTarefa(tarefa);

        const resultado = gerenciador.buscarTarefaPorId(3);
        expect(resultado).toEqual(tarefa);
    });

    test('deve retornar undefined ao buscar tarefa inexistente por id', () => {
        const resultado = gerenciador.buscarTarefaPorId(999);
        expect(resultado).toBeUndefined();
    });

    test('deve atualizar uma tarefa existente', () => {
        const tarefa = { id: 4, descricao: 'Tarefa original' };
        gerenciador.adicionarTarefa(tarefa);

        gerenciador.atualizarTarefa(4, { descricao: 'Tarefa atualizada' });
        const tarefaAtualizada = gerenciador.buscarTarefaPorId(4);

        expect(tarefaAtualizada.descricao).toBe('Tarefa atualizada');
    });

    test('deve listar todas as tarefas', () => {
        const tarefa1 = { id: 5, descricao: 'Tarefa 1' };
        const tarefa2 = { id: 6, descricao: 'Tarefa 2' };

        gerenciador.adicionarTarefa(tarefa1);
        gerenciador.adicionarTarefa(tarefa2);

        const tarefas = gerenciador.listarTarefas();
        expect(tarefas).toEqual([tarefa1, tarefa2]);
    });

    test('deve contar o número total de tarefas', () => {
        gerenciador.adicionarTarefa({ id: 7, descricao: 'Contar tarefas 1' });
        gerenciador.adicionarTarefa({ id: 8, descricao: 'Contar tarefas 2' });

        const total = gerenciador.contarTarefas();
        expect(total).toBe(2);
    });
});

// gerenciadorDeTarefas.test.js

describe('GerenciadorDeTarefas', () => {
    let gerenciador;

    beforeEach(() => {
        gerenciador = new GerenciadorDeTarefas();
    });

    test('deve marcar uma tarefa como concluída', () => {
        const tarefa = { id: 1, descricao: 'Tarefa para ser concluída', concluida: false };
        gerenciador.adicionarTarefa(tarefa);

        gerenciador.marcarTarefaComoConcluida(1);
        const tarefaConcluida = gerenciador.buscarTarefaPorId(1);

        expect(tarefaConcluida.concluida).toBe(true);
    });

    test('não deve marcar uma tarefa como concluída se a tarefa não existir', () => {
        const tarefa = { id: 2, descricao: 'Tarefa inexistente', concluida: false };

        gerenciador.marcarTarefaComoConcluida(999); // ID inexistente
        const tarefaInexistente = gerenciador.buscarTarefaPorId(2);

        expect(tarefaInexistente).toBeUndefined();
    });

    test('deve manter a tarefa não concluída se o id não existir', () => {
        const tarefa = { id: 3, descricao: 'Outra tarefa', concluida: false };
        gerenciador.adicionarTarefa(tarefa);

        gerenciador.marcarTarefaComoConcluida(999); // ID inexistente
        const tarefaNaoConcluida = gerenciador.buscarTarefaPorId(3);

        expect(tarefaNaoConcluida.concluida).toBe(false);
    });
});

// gerenciadorDeTarefas.test.js

describe('GerenciadorDeTarefas', () => {
    let gerenciador;

    beforeEach(() => {
        gerenciador = new GerenciadorDeTarefas();
    });

    test('deve listar apenas tarefas concluídas', () => {
        gerenciador.adicionarTarefa({ id: 1, descricao: 'Concluída', concluida: true });
        gerenciador.adicionarTarefa({ id: 2, descricao: 'Pendente', concluida: false });

        const tarefasConcluidas = gerenciador.listarTarefasConcluidas();
        expect(tarefasConcluidas).toHaveLength(1);
        expect(tarefasConcluidas[0].descricao).toBe('Concluída');
    });

    test('deve listar apenas tarefas pendentes', () => {
        gerenciador.adicionarTarefa({ id: 1, descricao: 'Concluída', concluida: true });
        gerenciador.adicionarTarefa({ id: 2, descricao: 'Pendente', concluida: false });

        const tarefasPendentes = gerenciador.listarTarefasPendentes();
        expect(tarefasPendentes).toHaveLength(1);
        expect(tarefasPendentes[0].descricao).toBe('Pendente');
    });

    test('deve remover todas as tarefas concluídas', () => {
        gerenciador.adicionarTarefa({ id: 1, descricao: 'Concluída', concluida: true });
        gerenciador.adicionarTarefa({ id: 2, descricao: 'Pendente', concluida: false });

        gerenciador.removerTarefasConcluidas();

        const todasTarefas = gerenciador.listarTarefas();
        expect(todasTarefas).toHaveLength(1);
        expect(todasTarefas[0].descricao).toBe('Pendente');
    });

    test('deve buscar tarefas por descrição', () => {
        gerenciador.adicionarTarefa({ id: 1, descricao: 'Comprar pão', concluida: false });

        const tarefas = gerenciador.buscarTarefaPorDescricao('pão');
        expect(tarefas).toHaveLength(1);
        expect(tarefas[0].descricao).toBe('Comprar pão');
    });

    test('deve adicionar uma tag a uma tarefa', () => {
        gerenciador.adicionarTarefa({ id: 1, descricao: 'Tarefa com tag', concluida: false });
        gerenciador.adicionarTagATarefa(1, 'Urgente');

        const tarefa = gerenciador.buscarTarefaPorId(1);
        expect(tarefa.tags).toContain('Urgente');
    });

    test('deve remover uma tag de uma tarefa', () => {
        gerenciador.adicionarTarefa({ id: 1, descricao: 'Tarefa com tag', concluida: false, tags: ['Urgente', 'Importante'] });
        gerenciador.removerTagDaTarefa(1, 'Urgente');

        const tarefa = gerenciador.buscarTarefaPorId(1);
        expect(tarefa.tags).not.toContain('Urgente');
        expect(tarefa.tags).toContain('Importante');
    });

    test('deve listar tarefas por tag', () => {
        gerenciador.adicionarTarefa({ id: 1, descricao: 'Tarefa 1', concluida: false, tags: ['Urgente'] });
        gerenciador.adicionarTarefa({ id: 2, descricao: 'Tarefa 2', concluida: false, tags: ['Normal'] });

        const tarefasUrgentes = gerenciador.listarTarefasPorTag('Urgente');
        expect(tarefasUrgentes).toHaveLength(1);
        expect(tarefasUrgentes[0].descricao).toBe('Tarefa 1');
    });

    test('deve buscar tarefas por data', () => {
        const data = new Date().toISOString().split('T')[0]; // Data atual
        gerenciador.adicionarTarefa({ id: 1, descricao: 'Tarefa com data', concluida: false, data });

        const tarefas = gerenciador.buscarTarefasPorData(data);
        expect(tarefas).toHaveLength(1);
        expect(tarefas[0].descricao).toBe('Tarefa com data');
    });
});


// gerenciadorDeTarefas.test.js

describe('GerenciadorDeTarefas', () => {
    let gerenciador;

    beforeEach(() => {
        gerenciador = new GerenciadorDeTarefas();
    });

    test('deve buscar tarefas por data', () => {
        const data = '2024-08-25';
        gerenciador.adicionarTarefa({ id: 1, descricao: 'Tarefa com data', data });
        gerenciador.adicionarTarefa({ id: 2, descricao: 'Outra tarefa', data: '2024-08-26' });

        const tarefasPorData = gerenciador.buscarTarefasPorData(data);
        expect(tarefasPorData).toHaveLength(1);
        expect(tarefasPorData[0].descricao).toBe('Tarefa com data');
    });

    test('deve atualizar a prioridade de uma tarefa', () => {
        gerenciador.adicionarTarefa({ id: 1, descricao: 'Tarefa', prioridade: 1 });
        gerenciador.atualizarPrioridade(1, 5);

        const tarefa = gerenciador.buscarTarefaPorId(1);
        expect(tarefa.prioridade).toBe(5);
    });

    test('deve listar tarefas por prioridade', () => {
        gerenciador.adicionarTarefa({ id: 1, descricao: 'Tarefa 1', prioridade: 1 });
        gerenciador.adicionarTarefa({ id: 2, descricao: 'Tarefa 2', prioridade: 2 });

        const tarefasPrioridade1 = gerenciador.listarTarefasPorPrioridade(1);
        expect(tarefasPrioridade1).toHaveLength(1);
        expect(tarefasPrioridade1[0].descricao).toBe('Tarefa 1');
    });

    test('deve contar tarefas por prioridade', () => {
        gerenciador.adicionarTarefa({ id: 1, descricao: 'Tarefa 1', prioridade: 1 });
        gerenciador.adicionarTarefa({ id: 2, descricao: 'Tarefa 2', prioridade: 2 });
        gerenciador.adicionarTarefa({ id: 3, descricao: 'Tarefa 3', prioridade: 1 });

        const count = gerenciador.contarTarefasPorPrioridade(1);
        expect(count).toBe(2);
    });

    test('deve marcar todas as tarefas como concluídas', () => {
        gerenciador.adicionarTarefa({ id: 1, descricao: 'Tarefa 1', concluida: false });
        gerenciador.adicionarTarefa({ id: 2, descricao: 'Tarefa 2', concluida: false });

        gerenciador.marcarTodasComoConcluidas();

        const tarefas = gerenciador.listarTarefas();
        expect(tarefas.every(tarefa => tarefa.concluida)).toBe(true);
    });

    test('deve reabrir uma tarefa marcada como concluída', () => {
        gerenciador.adicionarTarefa({ id: 1, descricao: 'Tarefa 1', concluida: true });

        gerenciador.reabrirTarefa(1);

        const tarefa = gerenciador.buscarTarefaPorId(1);
        expect(tarefa.concluida).toBe(false);
    });

    test('deve ordenar tarefas por data', () => {
        gerenciador.adicionarTarefa({ id: 1, descricao: 'Tarefa 1', data: '2024-08-25' });
        gerenciador.adicionarTarefa({ id: 2, descricao: 'Tarefa 2', data: '2024-08-24' });
        gerenciador.adicionarTarefa({ id: 3, descricao: 'Tarefa 3', data: '2024-08-26' });

        gerenciador.ordenarTarefasPorData();

        const tarefas = gerenciador.listarTarefas();
        expect(tarefas[0].descricao).toBe('Tarefa 2');
        expect(tarefas[1].descricao).toBe('Tarefa 1');
        expect(tarefas[2].descricao).toBe('Tarefa 3');
    });

    test('deve ordenar tarefas por prioridade', () => {
        gerenciador.adicionarTarefa({ id: 1, descricao: 'Tarefa 1', prioridade: 2 });
        gerenciador.adicionarTarefa({ id: 2, descricao: 'Tarefa 2', prioridade: 1 });
        gerenciador.adicionarTarefa({ id: 3, descricao: 'Tarefa 3', prioridade: 3 });

        gerenciador.ordenarTarefasPorPrioridade();

        const tarefas = gerenciador.listarTarefas();
        expect(tarefas[0].descricao).toBe('Tarefa 2');
        expect(tarefas[1].descricao).toBe('Tarefa 1');
        expect(tarefas[2].descricao).toBe('Tarefa 3');
    });
});



