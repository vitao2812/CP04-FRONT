// Declara um array chamado 'tasks' para armazenar as tarefas
const tasks = [
    // Adiciona um objeto representando uma tarefa inicial
    { id: 1, titulo: "Tarefa inicial", concluida: false }
];

// Exibe no console a lista inicial de tarefas
console.log("Tarefas iniciais:", tasks);

// Captura os elementos do DOM necessários
const taskInput = document.getElementById("taskInput"); // Campo de entrada de texto
const addTaskBtn = document.getElementById("addTaskBtn"); // Botão de adicionar tarefa
const taskContainer = document.getElementById("taskContainer"); // Lista de tarefas
const filterPendingBtn = document.getElementById("filterPendingBtn"); // Botão para filtrar pendentes

// Adiciona um evento de clique ao botão para capturar o valor do input e criar uma nova tarefa
addTaskBtn.addEventListener("click", () => {
    const titulo = taskInput.value.trim(); // Obtém o valor do input removendo espaços extras
    
    if (titulo !== "") { // Verifica se o input não está vazio
        const newTask = { 
            id: tasks.length + 1, // Gera um ID único para a tarefa
            titulo, // Define o título da tarefa
            concluida: false // Define o status como não concluído
        };
        
        tasks.push(newTask); // Adiciona a nova tarefa ao array
        renderTasks(tasks); // Atualiza a lista exibida no DOM
        taskInput.value = ""; // Limpa o campo de entrada após adicionar a tarefa
        
        alert("Tarefa adicionada com sucesso!"); // Exibe um alert informando que a tarefa foi adicionada
    }
});

// Função para renderizar a lista de tarefas no DOM
function renderTasks(taskList) {
    taskContainer.innerHTML = ""; // Limpa a lista antes de renderizar
    
    taskList.forEach(task => {
        const li = document.createElement("li"); // Cria um elemento de lista
        li.textContent = task.titulo; // Define o texto como o título da tarefa
        
        // Cria um botão "Concluir" para cada tarefa
        const completeBtn = document.createElement("button");
        completeBtn.textContent = "Concluir";
        completeBtn.addEventListener("click", () => {
            task.concluida = true; // Marca a tarefa como concluída
            renderTasks(tasks); // Atualiza o DOM para refletir a mudança
        });
        
        li.appendChild(completeBtn); // Adiciona o botão à tarefa na lista
        taskContainer.appendChild(li); // Adiciona a tarefa à lista no DOM
    });
}

// Adiciona um evento de clique ao botão de filtrar pendentes
filterPendingBtn.addEventListener("click", () => {
    const pendingTasks = tasks.filter(task => !task.concluida); // Filtra apenas as tarefas não concluídas
    renderTasks(pendingTasks); // Renderiza apenas as tarefas pendentes
});
