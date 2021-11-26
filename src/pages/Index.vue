<template>
  <q-page class="row items-center justify-evenly">
    <AllPersons :data="getPersons" />
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import AllPersons from 'components/Item/AllItems.vue';
import { defineComponent, ref } from 'vue';
import { useStore } from 'src/store';
import { createNamespacedHelpers } from 'vuex-composition-helpers';
const { useGetters } = createNamespacedHelpers(useStore(), 'person');
// import { Person } from 'src/store/person/state';

export default defineComponent({
  name: 'PageIndex',
  components: { AllPersons },
  setup() {
    // const $store = useStore();
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1',
      },
      {
        id: 2,
        content: 'ct2',
      },
      {
        id: 3,
        content: 'ct3',
      },
      {
        id: 4,
        content: 'ct4',
      },
      {
        id: 5,
        content: 'ct5',
      },
    ]);
    const meta = ref<Meta>({
      totalCount: 1200,
    });
    const { getPersons } = useGetters(['getPersons'])
    return { todos, meta, getPersons };
  },
});
</script>
