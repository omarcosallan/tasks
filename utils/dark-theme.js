export function isDark() {
  if (document.querySelector("body").classList.contains("dark")) {
    document.querySelector(".dark-theme").src = "assets/img/on.png";
  } else {
    document.querySelector(".dark-theme").src = "assets/img/off.png";
  }
}

export function alterDark() {}
