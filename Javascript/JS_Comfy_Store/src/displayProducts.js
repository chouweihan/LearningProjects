import { formatPrice } from "./utils.js";
import { addToCart } from "./cart/setupCart.js";
const display = (products, element) => {
  element.innerHTML = products
    .map((product) => {
      const { id, name, image, price } = product;
      return `<article class="product">
          <div class="product-container">
            <img src="${image}" class="product-img img" alt="" />
            <div class="product-icons">
              <a href="product.html?id=${id}" class="product-icon"
                ><i class="fas fa-search"></i
              ></a>
              <button class="product-cart-btn product-icon" data-id="${id}">
                <i class="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
          <footer>
            <p class="product-name">${name}</p>
            <h4 class="product-price">${formatPrice(price)}</h4>
          </footer>
        </article>`;
    })
    .join("");

  element.addEventListener("click", function (e) {
    const element = e.target;
    const parent = e.target.parentElement;
    if (e.target.classList.contains("fa-shopping-cart")) {
      addToCart(parent.dataset.id);
    } else if (element.classList.contains("product-cart-btn")) {
      addToCart(element.dataset.id);
    }
  });
};

export default display;
