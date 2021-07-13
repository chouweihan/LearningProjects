// global imports
import "../toggleSidebar.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";
// specific
import { addToCart } from "../cart/setupCart.js";
import { singleProductUrl, getElement, formatPrice } from "../utils.js";

const loading = getElement(".page-loading");
const centerDOM = getElement(".single-product-center");
const pageTitleDOM = getElement(".page-hero-title");
const imgDOM = getElement(".single-product-img");
const titleDOM = getElement(".single-product-title");
const companyDOM = getElement(".single-product-company");
const priceDOM = getElement(".single-product-price");
const colorsDOM = getElement(".single-product-colors");
const descDOM = getElement(".single-product-desc");
const cartBtn = getElement(".addToCartBtn");

let productID;

// show product when page loads

const showError = () => {
  centerDOM.innerHTML = `<div>
    <h3 class="error">No product found</h3>
    <a href="index.html" class="btn">go back home</a>
  </div>`;
  centerDOM.classList.add("error-div");
};

window.addEventListener("DOMContentLoaded", async function () {
  const urlID = window.location.search;

  try {
    const response = await fetch(`${singleProductUrl}${urlID}`);
    if (response.status >= 200 && response.status <= 299) {
      const product = await response.json();
      const { id, fields } = product;
      const { name, company, price, colors, description } = fields;
      const image = fields.image[0].thumbnails.large.url;
      productID = id;
      document.title = `Product || ${name.toUpperCase()}`;
      pageTitleDOM.textContent = name;
      titleDOM.textContent = name;
      imgDOM.src = image;
      companyDOM.textContent = company;
      priceDOM.textContent = formatPrice(price);
      descDOM.textContent = description;
      cartBtn.dataset.id = productID;
      colors.forEach((color) => {
        const span = document.createElement("span");
        span.classList.add("product-color");
        span.style.backgroundColor = `${color}`;
        colorsDOM.appendChild(span);
      });
    } else {
      console.log(response.status, response.statusText);
      showError();
    }
  } catch (error) {
    console.log(error);
    showError();
  }

  loading.style.display = "none";
});

cartBtn.onclick = () => {
  addToCart(productID);
};
