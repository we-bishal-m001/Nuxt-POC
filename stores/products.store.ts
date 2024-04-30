import type { Product } from "~/types/product.type";

export const useProductStore = defineStore("product-store", () => {
  
  const products = ref<Product[]>([]);

  return {
    products,
  };
});
