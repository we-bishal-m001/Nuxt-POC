import type { Product } from "~/types/product.type";

export const useProductStore = defineStore("product-store", () => {
  const products = ref<Product[]>([]);
  const loading = ref(false);
  const error = ref('');

  return {
    products,
    loading,
    error,
  };
});
