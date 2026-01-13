<script setup lang="ts">
import UserCart from '@/components/UserCart.vue';
import CommonCart from '@/components/CommonCart.vue';
import CommonSelection from '@/components/CommonSelection.vue';
import UserSelection from '@/components/UserSelection.vue';

const maxUserSelected = 6;
const maxCommonSelected = 1;
</script>

<template>
  <div class="page main-page">
    <main class="main-page__main section section_horizontal-indents">
      <h1>Select products</h1>
      <section class="app-section">
        <div class="app-section__header">
          <UserSelection class="app-section__user-selection" :max-selected="maxUserSelected" />
          <CommonSelection class="app-section__common-selection" :max-selected="maxCommonSelected" />
        </div>

        <div class="app-section__content">
          <UserCart class="app-section__user-cart" :max-selected="maxUserSelected" />
          <CommonCart class="app-section__common-cart" :max-selected="maxCommonSelected" />
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped></style>
