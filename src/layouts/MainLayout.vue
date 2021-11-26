<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="text-center">
          Pure and Ind. Chemistry 0'20 UNN
        </q-toolbar-title>

        <div><q-toggle color="negative" v-model="loadImages" label="Show Picture" /></div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, computed, WritableComputedRef } from 'vue';
import { useStore } from 'src/store';
import { createNamespacedHelpers } from 'vuex-composition-helpers';
const { useMutations, useGetters } = createNamespacedHelpers(
  useStore(),
  'person'
);
export default defineComponent({
  name: 'MainLayout',

  setup() {
    const $store = useStore()
    const { setLoadImages } = useMutations(['setLoadImages']);
    const { getLoadImages } = useGetters(['getLoadImages']);
    const loadImages: WritableComputedRef<boolean> = computed({
      get(): boolean{
        return $store.state.person.loadImages;
      },
      set(val): void {
        setLoadImages(val);
      },
    });
    return {
      getLoadImages,
      loadImages
    };
  },
});
</script>
