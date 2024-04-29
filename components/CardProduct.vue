<template>
  <UCard class="max-w-sm">
    <template #header>
      <div class="flex flex-col">
        <h3 class="font-medium text-lg">
          <NuxtLink :to="`/products/${props.id}`">
            {{ props.title }}
          </NuxtLink>
        </h3>
        <span class="mt-2 shrink-0">
          <UBadge class="mr-2">
            {{ props.brand }}
          </UBadge>
          <UBadge color="blue" class="capitalize">
            {{ props.category }}
          </UBadge>
        </span>
      </div>
    </template>
    <div>
      <NuxtLink :to="`/products/${props.id}`" class="relative">
        <NuxtImg
          :src="props.thumbnail"
          :alt="props.title"
          loading="lazy"
          width="300"
          height="350"
          class="mx-auto w-full object-cover rounded-md h-[350px]"
        />
        <UBadge
          v-if="props.discountPercentage"
          color="white"
          size="md"
          class="rounded-full absolute top-0 left-0 m-2"
          >{{ Math.floor(props.discountPercentage) }}% OFF</UBadge
        >
      </NuxtLink>
      <div class="flex flex-col gap-2">
        <p class="mt-2">  
          {{ props.description }}
        </p>
        <div class="flex items-center justify-between">
          <span class="text-2xl font-semibold">${{ props.price }}.00</span>
          <span v-if="props.rating">
            <Icon
              name="noto:star"
              size="18"
              v-for="n in Math.floor(props.rating)"
              :key="n"
              class="mr-1.5"
            />
            <UBadge>{{ Math.floor(props.rating) }}.0</UBadge>
          </span>
        </div>
      </div>
    </div>

    <template #footer>
      <UButton size="lg" color="blue" block class="mt-auto">
        <Icon name="mdi:cart-outline" size="18" /> Add to cart</UButton
      >
    </template>
  </UCard>
</template>

<script lang="ts" setup>
import type { Product } from "~/types/product.type";

const props = defineProps<Partial<Product>>();
</script>

<style></style>
