import { Tarefa } from "./tarefa.js";
import { allTasks, percentual } from "../utils/atualizaDados.js";

export const carregaTarefa = () => {
  const tarefasCadastradas =
    JSON.parse(localStorage.getItem("todo-list")) || [];
  const lista = document.querySelector("[data-list]");
  lista.innerHTML = "";
  if (tarefasCadastradas.length === 0) {
    lista.style.display = "block";
    lista.innerHTML = `<p class="noTasks">Nenhuma tarefa encontrada</p>`;
  } else {
    lista.style.display = "grid";
    tarefasCadastradas.forEach((tarefa, id) => {
      lista.appendChild(Tarefa(tarefa, id));
    });
  }

  percentual();
  allTasks();
};
