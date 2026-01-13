import { defineStore } from 'pinia';
import { computed, Ref, ref } from 'vue';
import { Product } from '@/interfaces/product.interface';
import { userProducts as userInitialProducts } from '@/data/products.data';
import { commonProducts as commonInitialProducts } from '@/data/products.data';

type Cart = number[];
type Selection = number[];

export const useAppStore = defineStore('app', () => {
  const products = ref<Product[]>([...userInitialProducts, ...commonInitialProducts]);

  const userCart = ref<Cart>(userInitialProducts.map((product) => product.id));
  const userCartProducts = computed<Product[]>(() =>
    products.value.filter((product) => userCart.value.includes(product.id))
  );

  const commonCart = ref<Cart>(commonInitialProducts.map((product) => product.id));
  const commonCartProducts = computed<Product[]>(() =>
    products.value.filter((product) => commonCart.value.includes(product.id))
  );

  const userSelection = ref<Selection>([]);
  const userSelectionProducts = computed<Product[]>(() =>
    userSelection.value.map((id) => products.value.find((product) => product.id === id)!)
  );

  const commonSelection = ref<Selection>([]);
  const commonSelectionProducts = computed<Product[]>(() =>
    commonSelection.value.map((id) => products.value.find((product) => product.id === id)!)
  );

  function toggleSelection(id: number, selection: Ref<Selection>, maxSelected?: number) {
    const selectionSet = new Set(selection.value);

    if (selectionSet.has(id)) {
      selectionSet.delete(id);
    } else {
      if (maxSelected === 1) {
        selectionSet.clear();
      }
      if (!maxSelected || selectionSet.size < maxSelected) {
        selectionSet.add(id);
      }
    }

    selection.value = Array.from(selectionSet);
  }

  return {
    products,
    userCart,
    userCartProducts,
    userSelection,
    userSelectionProducts,

    commonCart,
    commonCartProducts,
    commonSelection,
    commonSelectionProducts,

    toggleSelection,
  };
});
