import { carregaTarefa } from "./carregaTarefa.js";
import { BotaoConclui } from "./concluirTarefa.js";

export const addNewTask = (evento) => {
  evento.preventDefault();

  const todoList = JSON.parse(localStorage.getItem("todo-list")) || [];

  const tarefaEl = document.querySelector("#tarefa");
  const descricaoEl = document.querySelector("#descricao");
  const dataCriacao = new Date();
  const concluida = false;

  const tarefa = tarefaEl.value;
  const descricao = descricaoEl.value;

  if (tarefa != "" && descricao != "") {
    const dados = {
      tarefa,
      descricao,
      dataCriacao,
      concluida,
    };

    const todoListAtualizado = [dados, ...todoList];
    localStorage.setItem("todo-list", JSON.stringify(todoListAtualizado));

    tarefaEl.value = "";
    descricaoEl.value = "";
    carregaTarefa();
  }
};

export const Tarefa = ({ tarefa, descricao, dataCriacao, concluida }, id) => {
  const task = document.createElement("li");
  task.classList.add("task");

  const concluir = BotaoConclui(carregaTarefa, id);
  if (concluida) {
    concluir.classList.toggle("status--concluido");
  }

  task.innerHTML = `
    <h2 class="task__title">${tarefa}</h2>
    <p class="task__description">${descricao}</p>
    <p class="task__date">${dataCriacao}</p>`;

  task.appendChild(concluir);
  document.querySelector(".tasks").appendChild(task);

  return task;
};
