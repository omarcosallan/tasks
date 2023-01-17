const deletarTarefa = (atualiza, id) => {
  const tarefasCadastradas = JSON.parse(localStorage.getItem("todo-list"));
  tarefasCadastradas.splice(id, 1);
  localStorage.setItem("todo-list", JSON.stringify(tarefasCadastradas));

  atualiza();
};

export const BotaoDeleta = (atualiza, id) => {
  const botaoConclui = document.createElement("p");
  botaoConclui.classList.add("options");
  botaoConclui.classList.add("delete");
  botaoConclui.classList.add("border-radius");
  botaoConclui.innerText = "Delete";

  botaoConclui.addEventListener("click", () => deletarTarefa(atualiza, id));

  return botaoConclui;
};
