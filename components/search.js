const filterElement = document.querySelector("[data-search]");

export const filterTasks = () => {
  const tasks = document.querySelectorAll(".tasks li");
  if (filterElement.value != "") {
    for (let task of tasks) {
      let title = task.querySelector("h2");
      let description = task.querySelector(".task__description");
      title = title.textContent.toLowerCase();
      description = description.textContent.toLowerCase();

      let filterText = filterElement.value.toLowerCase();

      if (title.includes(filterText) || description.includes(filterText)) {
        task.style.display = "block";
      } else {
        task.style.display = "none";
      }
    }
  } else {
    for (let task of tasks) {
      task.style.display = "block";
    }
  }
};
