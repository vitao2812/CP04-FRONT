// Declara um array chamado 'tasks' para armazenar as tarefas
// Declara um array chamado 'tasks' para armazenar as tarefas
const tasks = [];

// Exibe no console a lista de tarefas (inicialmente vazia)
console.log("Tarefas iniciais:", tasks);


// Captura os elementos do DOM necessários
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskContainer = document.getElementById("taskContainer");
const filterPendingBtn = document.getElementById("filterPending");
const showAllBtn = document.getElementById("showAll");
const filterCompletedBtn = document.getElementById("filterCompleted");

// Função para renderizar a lista de tarefas no DOM
function renderTasks(taskList) {
    taskContainer.innerHTML = ""; // Limpa a lista antes de renderizar

    taskList.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task.titulo;

        // Adiciona uma classe 'completed' para tarefas concluídas
        if (task.concluida) {
            li.classList.add("completed");
        }

        // Cria o botão "Concluir"
        const completeBtn = document.createElement("button");
        completeBtn.textContent = task.concluida ? "Concluída" : "Concluir"; // Muda o texto
        completeBtn.style.backgroundColor = task.concluida ? "#27ae60" : "#4a90e2"; // Muda a cor

        // Marca a tarefa como concluída e altera o botão
        completeBtn.addEventListener("click", () => {
            task.concluida = true; // Marca a tarefa como concluída
            renderTasks(tasks); // Atualiza a lista
        });

        li.appendChild(completeBtn);
        taskContainer.appendChild(li);
    });
}

// Adiciona um evento de clique ao botão para capturar o valor do input e criar uma nova tarefa
addTaskBtn.addEventListener("click", () => {
    const titulo = taskInput.value.trim();

    if (titulo !== "") {
        const newTask = { 
            id: tasks.length + 1,
            titulo,
            concluida: false
        };

        tasks.push(newTask);
        renderTasks(tasks); // Atualiza a lista de tarefas
        taskInput.value = ""; // Limpa o campo de entrada

        alert("Tarefa adicionada com sucesso!");
    }
});

// Adiciona evento para filtrar apenas as tarefas pendentes
filterPendingBtn.addEventListener("click", () => {
    const pendingTasks = tasks.filter(task => !task.concluida);
    renderTasks(pendingTasks);
});

// Adiciona evento para filtrar apenas as tarefas concluídas
filterCompletedBtn.addEventListener("click", () => {
    const completedTasks = tasks.filter(task => task.concluida);
    renderTasks(completedTasks);
});

// Adiciona evento para mostrar todas as tarefas
showAllBtn.addEventListener("click", () => {
    renderTasks(tasks); // Mostra todas as tarefas novamente
});
