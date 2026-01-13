<script setup lang="ts">
import { useAppStore } from '@/stores/app.store';
import ProductCard from '@/components/ProductCard.vue';
import { toRef } from 'vue';

const appStore = useAppStore();

const props = defineProps<{
  maxSelected: number;
}>();

function unselectUserProduct(id: number) {
  appStore.toggleSelection(id, toRef(appStore, 'userSelection'));
}
</script>

<template>
  <div class="products-cart">
    <h2 class="products-cart__heading">
      Выбрано товаров пользователя {{ appStore.userSelection.length }} из {{ props.maxSelected }}
    </h2>
    <div class="products-cart__products">
      <ProductCard
        v-for="product in appStore.userSelectionProducts"
        :key="product.id"
        :product="product"
        @click="unselectUserProduct(product.id)"
      />
    </div>
  </div>
</template>

<style scoped></style>
