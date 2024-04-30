<template>
  <div class="my-5">
    <h1 class="text-xl font-semibold mb-10">
      Total number of displayed products =
      <UBadge :label="data?.products.length || 0" />
    </h1>
    <div v-if="pending">
      <USkeleton class="w-[300px] h-[350px]" />
    </div>
    <!-- PRODUCT CARDS -->
    <div v-else class="grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      <div v-for="product in data?.products" :key="product.id">
        <CardProduct v-bind="product" />
      </div>
      <!-- {{ data }} -->
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const externalApiUrl = `${config.public.productsApiBaseUrl}?limit=100`;
const internalApiUrl = "/api/products";

// fetch all products
const { data, pending, status, error } = await useFetch<any>(externalApiUrl, {
  lazy: true,
});
</script>
