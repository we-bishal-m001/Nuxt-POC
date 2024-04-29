<template>
  <div class="my-5">
    <h1 class="text-xl font-semibold mb-10">
      Total number of displayed products =
      <UBadge size="lg">
        {{ productStore.products.length }}
      </UBadge>
    </h1>
    <!-- PRODUCT CARDS -->
    <div class="grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      <CardProduct
        v-for="product in productStore.products"
        :key="product.id"
        v-bind="product"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const externalApiUrl = `${config.public.productsApiBaseUrl}?limit=100`;
const internalApiUrl = "/api/products";

const productStore = useProductStore();

// fetch all products
try {
  productStore.loading = true;
  const { data } = await useFetch<any>(externalApiUrl);

  if (data.value.products) productStore.products = data.value.products;
  else productStore.error = "something wrong happended";
} catch (e) {
  console.error(e);
} finally {
  productStore.loading = false;
}
</script>

<style scoped></style>
