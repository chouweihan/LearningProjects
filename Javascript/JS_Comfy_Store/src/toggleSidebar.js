import { getElement } from "./utils.js";

const toggleBtn = getElement(".toggle-nav");
const sidebar = getElement(".sidebar-overlay");
const closeBtn = getElement(".sidebar-close");

toggleBtn.onclick = () => {
  sidebar.classList.add("show");
};

closeBtn.onclick = () => {
  sidebar.classList.remove("show");
};

sidebar.onclick = function (e) {
  if (e.target.classList.contains("sidebar-overlay"))
    sidebar.classList.remove("show");
};
