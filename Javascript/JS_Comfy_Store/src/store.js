import { getStorageItem, setStorageItem } from "./utils.js";

let store = getStorageItem("store");

const setupStore = (products) => {
  store = products.map((item) => {
    const { id, fields } = item;
    return {
      id,
      company: fields.company,
      fields: fields.feature,
      name: fields.name,
      price: fields.price,
      colors: fields.colors,
      featured: fields.featured,
      image: fields.image[0].thumbnails.large.url,
    };
  });
  setStorageItem("store", store);
};

const findProduct = (id) => {
  return store.find((product) => product.id === id);
};

export { store, setupStore, findProduct };
