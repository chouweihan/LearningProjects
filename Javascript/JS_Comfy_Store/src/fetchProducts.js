import { allProductsUrl } from "./utils.js";

const fetchProducts = async () => {
  try {
    const response = await fetch(allProductsUrl);
    const data = response.json();
    if (response) return data;
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default fetchProducts;
