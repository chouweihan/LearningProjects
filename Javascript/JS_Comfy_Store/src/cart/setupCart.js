// import
import {
  getStorageItem,
  setStorageItem,
  formatPrice,
  getElement,
} from "../utils.js";
import { openCart } from "./toggleCart.js";
import { findProduct } from "../store.js";
import addToCartDOM from "./addToCartDOM.js";
// set items

const cartItemCountDOM = getElement(".cart-item-count");
const cartItemsDOM = getElement(".cart-items");
const cartTotalDOM = getElement(".cart-total");

let cart = getStorageItem("cart");

export const addToCart = (id) => {
  let item = cart.find((cartItem) => cartItem.id === id);
  if (!item) {
    let product = findProduct(id);
    product = { ...product, amount: 1 };
    cart = [...cart, product];
    addToCartDOM(product);
  } else {
    const amount = increaseAmount(id);
    const items = [...cartItemsDOM.querySelectorAll(".cart-item-amount")];
    const newAmount = items.find((value) => value.dataset.id === id);
    newAmount.textContent = amount;
  }

  displayCartItemCount();
  displayCartTotal();
  setStorageItem("cart", cart);
  openCart();
};

const init = () => {
  displayCartItemDOM();
  setupCartFunction();
  displayCartItemCount();
  displayCartTotal();
};

function displayCartItemCount() {
  cartItemCountDOM.textContent = cart.reduce((total, item) => {
    return (total += item.amount);
  }, 0);
}

function displayCartTotal() {
  const amount = cart.reduce((total, cartItem) => {
    return (total += cartItem.amount * cartItem.price);
  }, 0);

  cartTotalDOM.textContent = `total : ${formatPrice(amount)}`;
}

function displayCartItemDOM() {
  cart.forEach((product) => {
    addToCartDOM(product);
  });
}

function increaseAmount(id) {
  let newAmount;
  cart = cart.map((item) => {
    if (item.id === id) {
      newAmount = item.amount + 1;
      item = { ...item, amount: newAmount };
    }
    return item;
  });
  return newAmount;
}

function decreaseAmount(id) {
  let newAmount;
  cart = cart.map((item) => {
    if (item.id === id) {
      newAmount = item.amount - 1;
      item = { ...item, amount: newAmount };
    }
    return item;
  });
  return newAmount;
}

function removeItem(id) {
  cart = cart.filter((item) => {
    return item.id !== id;
  });
}

function setupCartFunction() {
  cartItemsDOM.addEventListener("click", function (e) {
    let element = e.target;
    if (e.target.classList.contains("fas")) {
      element = e.target.parentElement;
    }

    const id = e.target.dataset.id;

    if (element.classList.contains("cart-item-remove-btn")) {
      removeItem(id);
      element.parentElement.parentElement.remove();
    }

    if (element.classList.contains("cart-item-increase-btn")) {
      const newAmount = increaseAmount(element.dataset.id);
      element.nextElementSibling.textContent = newAmount;
    }

    if (element.classList.contains("cart-item-decrease-btn")) {
      const newAmount = decreaseAmount(element.dataset.id);
      if (newAmount === 0) {
        removeItem(id);
        element.parentElement.parentElement.remove();
      } else {
        element.previousElementSibling.textContent = newAmount;
      }
    }

    displayCartItemCount();
    displayCartTotal();
    setStorageItem("cart", cart);
  });
}

init();
