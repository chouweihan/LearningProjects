import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupPrice = (store) => {
  const priceInput = getElement(".price-filter");
  const priceValue = getElement(".price-value");

  let maxPrice = Math.ceil(
    Math.max(...store.map((product) => product.price)) / 100
  );
  priceInput.value = maxPrice;
  priceInput.max = maxPrice;
  priceInput.min = 0;

  priceValue.textContent = `Value: $${priceInput.value}`;

  priceInput.addEventListener("input", function () {
    const value = parseInt(priceInput.value);
    priceValue.textContent = `Value: $${value}`;
    display(
      store.filter((item) => item.price / 100 <= value),
      getElement(".products-container")
    );
  });
};

export default setupPrice;
