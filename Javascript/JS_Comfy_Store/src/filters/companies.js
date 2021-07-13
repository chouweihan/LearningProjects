import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupCompanies = (store) => {
  let companies = ["all", ...new Set(store.map((product) => product.company))];

  const companyContainer = getElement(".companies");
  companyContainer.innerHTML = companies
    .map((company) => {
      return `<button class="company-btn">${company}</button>`;
    })
    .join("");

  companyContainer.onclick = (e) => {
    const ele = e.target;
    if (ele.classList.contains("company-btn")) {
      let choice = ele.textContent.toLowerCase();
      if (choice === "all") {
        display(store, getElement(".products-container"));
      } else {
        display(
          store.filter((item) => item.company === choice.toLowerCase()),
          getElement(".products-container")
        );
      }
    }
  };
};

export default setupCompanies;
