import { carregaTarefa } from "./components/carregaTarefa.js";
import { filterTasks } from "./components/search.js";
import { addNewTask } from "./components/tarefa.js";

document.querySelector("[data-addNew]").addEventListener("click", addNewTask);

document.querySelector("[data-search]").addEventListener("input", filterTasks);

carregaTarefa();
