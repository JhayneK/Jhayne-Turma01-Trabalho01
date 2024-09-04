# Jhayne-Turma01-Trabalho01

# Gerenciador de Tarefas - Testes Unitários com Jest

Este projeto implementa um **Gerenciador de Tarefas** simples em JavaScript e inclui testes unitários completos utilizando o framework **Jest**. Os testes são executados automaticamente através de uma pipeline configurada com **GitHub Actions**.

## Índice

1. [Visão Geral do Projeto](#visão-geral-do-projeto)
2. [Instalação e Configuração](#instalação-e-configuração)
3. [Execução dos Testes Locais](#execução-dos-testes-locais)
4. [Pipeline de Integração Contínua (CI) no GitHub Actions](#pipeline-de-integração-contínua-ci-no-github-actions)
5. [Detalhes dos Testes Unitários](#detalhes-dos-testes-unitários)
6. [Estrutura de Pastas](#estrutura-de-pastas)

---

## Visão Geral do Projeto

O **Gerenciador de Tarefas** implementa funcionalidades como adicionar, remover, listar e buscar tarefas, além de várias outras funcionalidades como marcar tarefas como concluídas, atribuir tags e priorizar tarefas.

As funcionalidades principais incluem:

- Adicionar e remover tarefas
- Buscar tarefas por ID, descrição ou data
- Listar tarefas pendentes e concluídas
- Adicionar e remover tags das tarefas
- Priorizar e ordenar tarefas

## Instalação e Configuração

### Pré-requisitos

Certifique-se de que você tem **Node.js** e **npm** instalados em seu ambiente. Para verificar a instalação, execute:

```bash
node -v
npm -v
```bash


git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio


npm install


npm install --save-dev jest


npm test


{
  "scripts": {
    "test": "jest"
  }
}

Detalhes dos Testes Unitários
Os testes foram criados utilizando o framework Jest para garantir que todas as funcionalidades da classe GerenciadorDeTarefas estão funcionando corretamente. Aqui estão algumas das funcionalidades testadas:

adicionarTarefa(tarefa): Testa se uma tarefa com descrição inválida (menor que 3 caracteres) lança uma exceção. Caso contrário, a tarefa é adicionada corretamente.
removerTarefa(id): Testa se uma tarefa é removida com base em seu ID.
buscarTarefaPorId(id): Verifica se uma tarefa específica pode ser encontrada pelo seu ID.
listarTarefas(): Garante que todas as tarefas podem ser listadas.
contarTarefas(): Testa a contagem correta do número de tarefas.
marcarTarefaComoConcluida(id): Verifica se uma tarefa pode ser marcada como concluída.
listarTarefasPendentes() e listarTarefasConcluidas(): Verifica se as tarefas são corretamente filtradas com base no status de conclusão.
removerTarefasConcluidas(): Testa se todas as tarefas concluídas são removidas corretamente.

Exemplo de Teste Unitário:
describe('GerenciadorDeTarefas', () => {
    let gerenciador;

    beforeEach(() => {
        gerenciador = new GerenciadorDeTarefas();
    });

    it('Deve adicionar uma tarefa válida', () => {
        const tarefa = { id: 1, descricao: 'Comprar farinha' };
        gerenciador.adicionarTarefa(tarefa);
        expect(gerenciador.tarefas.length).toBe(1);
    });

    it('Deve lançar erro ao adicionar uma tarefa com descrição muito curta', () => {
        const tarefa = { id: 2, descricao: 'Oi' };
        expect(() => gerenciador.adicionarTarefa(tarefa)).toThrow('Erro ao cadastrar tarefa');
    });

    it('Deve remover uma tarefa pelo ID', () => {
        const tarefa = { id: 1, descricao: 'Comprar fermento' };
        gerenciador.adicionarTarefa(tarefa);
        gerenciador.removerTarefa(1);
        expect(gerenciador.tarefas.length).toBe(0);
    });
});


### Ponto de Destaque:
- **Explicação Completa dos Testes:** Detalha o que está sendo testado e como cada funcionalidade é validada.
- **Passo a Passo para Configuração Local e no GitHub Actions:** Facilita o entendimento de como configurar o ambiente de testes.
- **Estrutura de Pastas:** Auxilia novos colaboradores a navegarem no projeto.

Se precisar de mais ajustes ou detalhes, me avise!


/src
  └── gerenciadorDeTarefas.js  # Arquivo principal da classe GerenciadorDeTarefas
/test
  └── gerenciadorDeTarefas.test.js  # Arquivo contendo os testes unitários
.github
  └── workflows
       └── nodejs.yml  # Arquivo de configuração da pipeline do GitHub Actions
package.json  # Arquivo de configuração do projeto
README.md  # Documentação do projeto

