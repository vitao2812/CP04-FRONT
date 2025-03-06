# CP04-FRONT
# Gerenciador de Tarefas Diárias

Este é um projeto de um **Gerenciador de Tarefas Diárias** desenvolvido com **HTML**, **CSS** e **JavaScript**. O objetivo é permitir que o usuário adicione, edite, filtre e gerencie suas tarefas diárias, com funcionalidades como conclusão de tarefas, filtragem de pendentes e exibição de tarefas em maiúsculas. A interface é responsiva e funciona bem em dispositivos móveis.

## Funcionalidades

1. **Adicionar Tarefas**: O usuário pode adicionar novas tarefas digitando no campo de entrada e clicando no botão "Adicionar".
2. **Concluir Tarefas**: O botão "Concluir" muda o estado de uma tarefa para concluída, e a aparência do botão também é alterada.
3. **Filtrar Tarefas Pendentes**: Ao clicar no botão "Filtrar Pendentes", a lista de tarefas é filtrada para exibir apenas as não concluídas.
4. **Mostrar Todas as Tarefas**: O botão "Mostrar Todas" exibe todas as tarefas, independentemente de estarem concluídas ou não.
5. **Tarefas em Maiúsculas**: A lista de tarefas pode ser exibida com os títulos em maiúsculas no console usando o método `map()`.
6. **Total de Tarefas Concluídas**: A quantidade total de tarefas concluídas pode ser calculada e exibida usando o método `reduce()`.

## Tecnologias Utilizadas

- **HTML**: Para estruturar a página.
- **CSS**: Para estilizar a página de forma funcional e agradável.
- **JavaScript**: Para implementar a lógica de adição, edição, filtro e manipulação das tarefas. Além disso, foram aplicados conceitos como destruturação, spread/rest e métodos de array (map, filter, reduce, etc.).

## Como Rodar o Projeto

1. Clone o repositório para sua máquina local:

    ```bash
    git clone https://github.com/usuario/gerenciador-de-tarefas.git
    ```

2. Navegue até a pasta do projeto:

    ```bash
    cd gerenciador-de-tarefas
    ```

3. Abra o arquivo `index.html` em um navegador de sua escolha.

## Estrutura de Arquivos

- **index.html**: O arquivo HTML que contém a estrutura da página.
- **style.css**: O arquivo de estilos CSS para estilizar o layout da página.
- **script.js**: O arquivo JavaScript com a lógica para gerenciar as tarefas.

## Funcionalidades de Desenvolvimento

- **Adicionar Tarefas**: Adiciona novas tarefas à lista com um título e marca como não concluída.
- **Concluir Tarefas**: Modifica o estado da tarefa para concluída e altera o botão correspondente.
- **Filtrar Tarefas Pendentes**: Filtra e exibe apenas as tarefas não concluídas.
- **Mostrar Todas as Tarefas**: Exibe todas as tarefas, independente do status de conclusão.
- **Exibir Títulos em Maiúsculas**: Usa o método `map()` para exibir os títulos das tarefas em maiúsculas no console.
- **Contabilizar Tarefas Concluídas**: Usa o método `reduce()` para contar quantas tarefas foram concluídas.

## Como Contribuir

1. Fork o repositório.
2. Crie uma nova branch com a sua feature (`git checkout -b feature/nome-da-feature`).
3. Faça suas alterações e commit (`git commit -am 'Adiciona nova feature'`).
4. Envie para a branch principal (`git push origin feature/nome-da-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

