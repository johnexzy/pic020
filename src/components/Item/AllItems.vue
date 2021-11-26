<template>
  <!-- <div> -->
  <!-- <q-toolbar class="q-px-none q-mb-lg">
      <q-btn-dropdown
        color="grey-3"
        unelevated
        no-caps
        text-color="grey-9"
        label="Today"
      >
        <q-list>
          <q-item clickable v-close-popup>
            <q-item-section>
              <q-item-label>Photos</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-close-popup>
            <q-item-section>
              <q-item-label>Videos</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-close-popup>
            <q-item-section>
              <q-item-label>Articles</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
      <q-space />
      <q-btn
        @click="changeView()"
        :text-color="itemView == true ? 'grey-9' : 'grey-5'"
        flat
        dense
        icon="grid_view"
      />
      <q-btn
        @click="changeView()"
        :text-color="itemView == false ? 'grey-9' : 'grey-5'"
        class="q-mx-md"
        flat
        dense
        icon="view_list"
      />
      <q-btn
        @click="hideFilter()"
        unelevated
        no-caps
        color="grey-3"
        text-color="grey-9"
        icon="filter_list"
        label="Hide Filter"
      />
    </q-toolbar> -->
  <!-- <div v-if="showFilter" class="row q-col-gutter-md q-mb-xl">
      <div class="col-12 col-md-4 col-lg-4">
        <div class="text-caption text-primary q-mb-sm">BLOCKCHAIN</div>
        <q-select
          dense
          filled
          square
          v-model="filter.blockchain"
          color="secondary"
          input-debounce="0"
          multiple
          options-selected-class="text-deep-orange"
          clearable
          label="Choose Blockchain"
          :options="Blockchain"
        >
          <template v-slot:selected-item="scope">
            <q-chip
              removable
              dense
              @remove="scope.removeAtIndex(scope.index)"
              :tabindex="scope.tabindex"
              text-color="black"
              class="q-pa-md"
            >
              <q-avatar style="font-size:28px">{{scope.opt.emoji}}</q-avatar>
              {{ scope.opt.label }}
            </q-chip>
            <q-badge v-else>*none*</q-badge>
          </template>
        </q-select>
      </div>
      <div class="col-12 col-md-4 col-lg-4">
        <div class="text-caption text-primary q-mb-sm">CATEGORY</div>

        <q-select
          v-model="filter.industry"
          dense
          filled
          color="primary"
          multiple
          options-selected-class="text-deep-orange"
          square
          label="Choose category"
          borderless
          :options="Categories"
          clearable
        >
          <template v-slot:option="scope">
            <q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
              <q-item-section avatar>
                {{ scope.opt.emoji }}
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  {{ scope.opt.label }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </template>
          <template v-slot:selected-item="scope">
            <q-chip
              removable
              dense
              @remove="scope.removeAtIndex(scope.index)"
              :tabindex="scope.tabindex"
              text-color="black"
              class="q-pa-md"
            >
              <q-avatar style="font-size:28px">{{scope.opt.emoji}}</q-avatar>
              {{ scope.opt.label }}
            </q-chip>
          </template>
        </q-select>
      </div>
      <div class="col-12 col-md-4 col-lg-4">
        <div class="text-caption text-primary q-mb-sm">MARKETPLACE</div>
        <q-select
          dense
          filled
          multiple
          options-selected-class="text-deep-orange"
          square
          v-model="filter.marketplace"
          label="Choose Marketplace"
          :options="Marketplaces"
        >
          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey"> No results </q-item-section>
            </q-item>
          </template>
          <template v-slot:selected-item="scope">
            <q-chip
              removable
              dense
              @remove="scope.removeAtIndex(scope.index)"
              :tabindex="scope.tabindex"
              text-color="black"
              class="q-pa-md"
            >
              {{ scope.opt.label }}
            </q-chip>
          </template>
        </q-select>
      </div> -->
  <!-- <div class="col-12 col-md-3 col-lg-3">
        <div class="text-caption text-primary q-mb-sm">TAG</div>
        <q-select
          dense
          outlined
          multiple
          square
          v-model="filter.tag"
          color="secondary"
          use-chips
          use-input
          input-debounce="0"
          label="Choose Tag"
          :options="Categories"
          @filter="filterFn"
        >
          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey"> No results </q-item-section>
            </q-item>
          </template>
        </q-select>
      </div> -->
  <!-- </div> -->

  <div>
    <q-infinite-scroll @load="onLoad" :offset="250">
      <item-grid-view :data="data" />
      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner-dots color="primary" size="40px" />
        </div>
      </template>
    </q-infinite-scroll>
  </div>
  <!-- </div> -->
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { useStore } from 'src/store';
import { createNamespacedHelpers } from 'vuex-composition-helpers';
import { Person } from '../models';
const { useMutations } = createNamespacedHelpers(useStore(), 'person');

import ItemGridView from 'components/Item/ItemGridView.vue';
// import { ModuleState, ModuleGetters, ModuleActions, ModuleMutations } from '@/store/person'
export default defineComponent({
  name: 'AllPersons',
  props: {
    data: {
      type: Array as PropType<Person[]>,
    },
  },
  components: { ItemGridView },

  setup() {
    const { setLoadPerson } = useMutations(['setLoadPerson']);
    return {
      onLoad(index: number, done: () => void) {
        setTimeout(() => {
          setLoadPerson();
          done();
        }, 2000);
      },
    };
  },
});
</script>
