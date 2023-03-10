const concluirTarefa = (atualiza, id) => {
  const tarefasCadastradas = JSON.parse(localStorage.getItem("todo-list"));
  tarefasCadastradas[id].concluida = !tarefasCadastradas[id].concluida;
  localStorage.setItem("todo-list", JSON.stringify(tarefasCadastradas));

  atualiza();
};

export const BotaoConclui = (atualiza, id) => {
  const botaoConclui = document.createElement("p");
  botaoConclui.classList.add("option-big");
  botaoConclui.classList.add("options");
  botaoConclui.classList.add("border-radius");
  botaoConclui.innerText = "Checked";

  botaoConclui.addEventListener("click", () => concluirTarefa(atualiza, id));

  return botaoConclui;
};
