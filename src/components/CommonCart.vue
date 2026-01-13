<script setup lang="ts">
import { useAppStore } from '@/stores/app.store';
import { toRef } from 'vue';
import ProductCard from '@/components/ProductCard.vue';

const appStore = useAppStore();

const props = defineProps<{
  maxSelected: number;
}>();

function toggleCommonSelection(id: number) {
  appStore.toggleSelection(id, toRef(appStore, 'commonSelection'), props.maxSelected);
}
</script>

<template>
  <div class="products-cart">
    <h2 class="products-cart__heading">Общие товары</h2>
    <div class="products-cart__products">
      <ProductCard
        v-for="product in appStore.commonCartProducts"
        :key="product.id"
        :product="product"
        :is-selected="appStore.commonSelection.includes(product.id)"
        @click="toggleCommonSelection(product.id)"
      />
    </div>
  </div>
</template>

<style scoped></style>
