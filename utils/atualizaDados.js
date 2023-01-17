export function percentual() {
  const tasks = document.querySelectorAll(".task");
  const tasksChecked = document.querySelectorAll(".checked");
  const progressEl = document.querySelector("[data-progress-status]");
  const percentual = (tasksChecked.length * 100) / tasks.length;
  progressEl.style.width = "" + percentual + "%";
}

export function allTasks() {
  const allTasksTitle = document.querySelector("[data-allTask-title]");
  allTasksTitle.innerText = `All tasks (${
    document.querySelectorAll(".task").length
  })`;
  const allTasksDescription = document.querySelector(
    "[data-allTask-description]"
  );
  allTasksDescription.innerText = `Checked (${
    document.querySelectorAll(".checked").length
  })`;
}
