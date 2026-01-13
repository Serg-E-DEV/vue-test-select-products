<script setup lang="ts">
import { useAppStore } from '@/stores/app.store';
import ProductCard from '@/components/ProductCard.vue';
import { toRef } from 'vue';

const appStore = useAppStore();

const props = defineProps<{
  maxSelected: number;
}>();

function toggleUserSelection(id: number) {
  appStore.toggleSelection(id, toRef(appStore, 'userSelection'), props.maxSelected);
}
</script>

<template>
  <div class="products-cart">
    <h2 class="products-cart__heading">Товары пользователя</h2>
    <div class="products-cart__products">
      <ProductCard
        v-for="product in appStore.userCartProducts"
        :key="product.id"
        :product="product"
        :is-selected="appStore.userSelection.includes(product.id)"
        @click="toggleUserSelection(product.id)"
      />
    </div>
  </div>
</template>

<style scoped></style>
