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
        renderTasks(); // Atualiza a lista exibida no DOM
        taskInput.value = ""; // Limpa o campo de entrada após adicionar a tarefa
    }
});

// Função para renderizar a lista de tarefas no DOM
function renderTasks() {
    taskContainer.innerHTML = ""; // Limpa a lista antes de renderizar
    
    tasks.forEach(task => {
        const li = document.createElement("li"); // Cria um elemento de lista
        li.textContent = task.titulo; // Define o texto como o título da tarefa
        taskContainer.appendChild(li); // Adiciona a tarefa à lista no DOM
    });
}
