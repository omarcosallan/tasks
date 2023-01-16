allTasks();
percentual();

document.querySelector(".main__tasks").addEventListener("click", (e) => {
  if (e.target.dataset.status == "concluir") {
    e.target.classList.toggle("status--concluido");
    e.target.innerText = "Concluído";
  }
  percentual();
});

document.querySelector(".btn__addNew").addEventListener("click", () => {
  const tarefa = document.querySelector("#tarefa");
  const descricao = document.querySelector("#descricao");
  const dataCriacao = new Date();
  if (tarefa.value != "" && descricao.value != "") {
    const task = document.createElement("li");
    task.classList.add("task");
    task.innerHTML = `
          <h2 class="task__title">${tarefa.value}</h2>
          <p class="task__description">${descricao.value}</p>
          <p class="task__date">${dataCriacao}</p>
          <div class="task__status">
            <p class="status status--pendente" data-status="concluir">Concluir</p>
            <p class="status status--editar">Editar</p>
            <p class="status status--excluir">Excluir</p>
          </div>`;
    document.querySelector(".main__tasks").appendChild(task);
    percentual();
    allTasks();
  }
  tarefa.value = "";
  descricao.value = "";
});

function percentual() {
  const tasks = document.querySelectorAll(".task");
  const tasksChecked = document.querySelectorAll(".status--concluido");
  const progressEl = document.querySelector(".progresso__status");
  const percentual = (tasksChecked.length * 100) / tasks.length;
  progressEl.style.width = "" + percentual + "%";
}

function allTasks() {
  const allTasks = document.querySelector(".tasks__title");
  allTasks.innerText = `All tasks (${
    document.querySelectorAll(".task").length
  })`;
}
