import { carregaTarefa } from "./components/carregaTarefa.js";
import { filterTasks } from "./components/search.js";
import { addNewTask } from "./components/tarefa.js";
import { isDark } from "./utils/dark-theme.js";

document.querySelector("[data-addNew]").addEventListener("click", addNewTask);

document.querySelector("[data-search]").addEventListener("input", filterTasks);

carregaTarefa();

window.addEventListener("load", () => {
  isDark();
});

document.querySelector(".dark-theme").addEventListener("click", () => {
  if (document.querySelector("body").classList.contains("dark")) {
    document.querySelector("body").classList = "container no-dark";
  } else {
    document.querySelector("body").classList = "container dark";
  }
  isDark();
});
