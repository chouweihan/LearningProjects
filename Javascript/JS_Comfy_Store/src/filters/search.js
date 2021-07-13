import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const productContainer = getElement(".products-container");

const setupSearch = (store) => {
  const form = getElement(".input-form");
  const nameInput = getElement(".search-input");

  form.addEventListener("keyup", function () {
    const value = nameInput.value;
    if (!value) {
      display(store, productContainer);
    } else {
      console.log(value);
      const newStore = store.filter((product) =>
        product.name.toLowerCase().trim().includes(value.trim())
      );
      display(newStore, productContainer);
      if (newStore.length < 1) {
        productContainer.innerHTML = `<h3 class="filter-error"> no product match </h3>`;
      }
    }
  });
};

export default setupSearch;
