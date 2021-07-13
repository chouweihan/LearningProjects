import { getElement } from "../utils.js";

const cart = getElement(".cart-overlay");
const openBtn = getElement(".toggle-cart");
const closeBtn = getElement(".cart-close");

openBtn.onclick = () => {
  openCart();
};

closeBtn.onclick = () => {
  cart.classList.remove("show");
};

cart.onclick = (e) => {
  if (e.target.classList.contains("cart-overlay"))
    cart.classList.remove("show");
};

export const openCart = () => {
  cart.classList.add("show");
};
