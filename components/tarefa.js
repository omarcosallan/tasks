import { carregaTarefa } from "./carregaTarefa.js";
import { BotaoConclui } from "./concluirTarefa.js";
import { BotaoDeleta } from "./deletarTarefa.js";

export const addNewTask = (event) => {
  event.preventDefault();

  const inputs = document.querySelectorAll(".input-task");
  const isVisible = Array.from(inputs).every(
    (input) => input.style.display === "initial"
  );
  if (!isVisible) {
    inputs.forEach((input) => {
      input.style.display = "initial";
    });
  } else {
    const todoList = JSON.parse(localStorage.getItem("todo-list")) || [];

    const tarefaEl = inputs[0];
    const descricaoEl = inputs[1];
    const dataConclusaoEl = inputs[2];
    const dataCriacao = moment().format("DD-MM-YYYY HH:mm");
    const concluida = false;

    const tarefa = tarefaEl.value.trim();
    const descricao = descricaoEl.value.trim();
    const dataConclusao = moment(dataConclusaoEl.value).format(
      "DD-MM-YYYY HH:mm"
    );

    if (tarefa != "" && descricao != "" && dataConclusao != "Invalid date") {
      const dados = {
        tarefa,
        descricao,
        dataCriacao,
        dataConclusao,
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
    } else {
      document.querySelector(".error").innerText =
        "ATENÇÃO! Preencha todos os campos.";
      setTimeout(() => {
        document.querySelector(".error").innerText = "";
      }, 2500);
    }
  }
};

export const Tarefa = (
  { tarefa, descricao, dataCriacao, dataConclusao, concluida },
  id
) => {
  const task = document.createElement("li");
  task.classList.add("task");
  task.classList.add("border-radius");

  const concluir = BotaoConclui(carregaTarefa, id);
  if (concluida) {
    concluir.classList.add("checked");
  }

  const dia = moment(dataConclusao, "DD-MM-YYYY HH:mm");
  const diff = moment().diff(dia);
  if (diff >= 0 && !concluida) {
    concluir.classList.add("expired");
  }

  const criado = moment(dataCriacao, "DD-MM-YYYY HH:mm");
  task.innerHTML = `
    <h2 class="task-title">${tarefa}</h2>
    <p class="task-description">${descricao}</p>
    <p class="task-date">Criado em ${moment(criado).format(
      "DD-MM-YYYY HH:mm"
    )}<br>Concluir até ${moment(dia).format("DD-MM-YYYY HH:mm")}</p>`;

  task.appendChild(concluir);
  task.appendChild(BotaoDeleta(carregaTarefa, id));
  document.querySelector(".tasks").appendChild(task);

  return task;
};
