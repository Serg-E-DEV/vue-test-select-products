<script setup lang="ts">
import { Product } from '@/interfaces/product.interface';

const props = defineProps<{
  product: Product;
  isSelected?: boolean;
}>();

const emit = defineEmits<{
  (e: 'product-click', id: number);
}>();

function onClick() {
  emit('product-click', props.product.id);
}
</script>

<template>
  <article :class="['product-card', { 'product-card_selected': isSelected }]" @click="onClick">
    <div class="product-card__number">{{ product.id }}</div>
    {{ product.name }}
  </article>
</template>

<style scoped></style>
