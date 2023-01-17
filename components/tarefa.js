import { carregaTarefa } from "./carregaTarefa.js";
import { BotaoConclui } from "./concluirTarefa.js";
import { BotaoDeleta } from "./deletarTarefa.js";

export const addNewTask = (event) => {
  event.preventDefault();

  const inputs = document.querySelectorAll(".input-task");
  inputs.forEach((input) => {
    input.style.display = "initial";
  });

  const todoList = JSON.parse(localStorage.getItem("todo-list")) || [];
 
  const tarefaEl = inputs[0];
  const descricaoEl = inputs[1];
  const dataCriacao = moment().format("DD/MM/YYYY, HH:mm");
  const concluida = false;

  const tarefa = tarefaEl.value.trim();
  const descricao = descricaoEl.value.trim();

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

    inputs.forEach((input) => {
      input.style.display = "none";
    });
  }
};

export const Tarefa = ({ tarefa, descricao, dataCriacao, concluida }, id) => {
  const task = document.createElement("li");
  task.classList.add("task");
  task.classList.add("border-radius");

  const concluir = BotaoConclui(carregaTarefa, id);
  if (concluida) {
    concluir.classList.add("checked");
  }

  task.innerHTML = `
    <h2 class="task-title">${tarefa}</h2>
    <p class="task-description">${descricao}</p>
    <p class="task-date">${dataCriacao}</p>`;

  task.appendChild(concluir);
  task.appendChild(BotaoDeleta(carregaTarefa, id));
  document.querySelector(".tasks").appendChild(task);

  return task;
};
