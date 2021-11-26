<template>
  <q-dialog
    v-model="itemDetailModal"
    @before-hide="hide"
    class="relative-position"
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <q-btn
      @click="itemDetailModal = false"
      size="xl"
      color="white"
      class="item-close"
      icon="ion-close-circle"
      flat
      round
    />
    <!-- <q-spinner v-if="DropIsLoading" color="white" size="3em" :thickness="2" /> -->
    <!-- <q-card class="bg-white item-card-modal" style="width: 1200px;"> -->
    <!-- <q-card-section class="q-py-xl"> -->
    <div style="max-width: 1000px; box-shadow: none">
      <modal-item-detail :id="id" />
    </div>
    <!-- </q-card-section> -->
    <!-- </q-card> -->
  </q-dialog>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'src/store';
import { useRouter } from 'vue-router'
import { createNamespacedHelpers } from 'vuex-composition-helpers';
const { useMutations } = createNamespacedHelpers(useStore(), 'person');

import ModalItemDetail from 'components/Item/ModalItemDetail.vue';
// import { ModuleState, ModuleGetters, ModuleActions, ModuleMutations } from '@/store/person'
export default defineComponent({
  name: 'DetailModal',
  props: {
    id: String
  },
  components: { ModalItemDetail },

  setup(props) {
    const { setPerson } = useMutations(['setPerson']);
    // alert('john')
    const itemDetailModal = ref(true)
    const router = useRouter()
    setPerson(props.id);
    return {
      hide(){
        router.back()
      },
      itemDetailModal
    };
  },
});
</script>

<style>
.item-card-modal {
  border-radius: 30px !important;
}
.item-close {
  position: absolute;
  right: 40px;
  top: 5px;
  z-index: 11;
  cursor: pointer
}
</style>
