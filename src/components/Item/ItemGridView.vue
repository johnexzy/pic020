<template>
  <div class="item-row">
    <div v-for="(item, index) in data" :key="index" class="item-grid">
      <single-item-card :item="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import SingleItemCard from './SingleItemCard.vue'
export interface Person {
  Timestamp: string;
  'Email Address': string;
  'Full Name': string;
  'State of origin': string;
  'Phone number': string;
  'Nick name (optional)': string;
  'Hobbies and passion': string;
  'Photo (passport)': string;
  image: string;
}
export default defineComponent({
  props: {
    data: {
      type: Array as PropType<Person[]>,
      default: () => []
    },
  },
  components: {SingleItemCard}
});
</script>

<style>
.item-row {
  -webkit-column-count: 4;
  -moz-column-count: 4;
  column-count: 4;
  -webkit-column-gap: 1em;
  -moz-column-gap: 1em;
  column-gap: 1em;
  margin: 1.5em;
  padding: 0;
  -moz-column-gap: 1.5em;
  -webkit-column-gap: 1.5em;
  column-gap: 1.5em;
  font-size: 0.85em;
}
.item-grid {
  display: inline-block;
  background: #fff;
  margin: 0 0 1.5em;
  width: 100%;
  -webkit-transition: 1s ease all;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

@media only screen and (max-width: 320px) {
  .item-row {
    -moz-column-count: 1;
    -webkit-column-count: 1;
    column-count: 1;
  }
}

@media only screen and (min-width: 321px) and (max-width: 768px) {
  .item-row {
    -moz-column-count: 2;
    -webkit-column-count: 2;
    column-count: 2;
  }
}
@media only screen and (min-width: 769px) and (max-width: 1200px) {
  .item-row {
    -moz-column-count: 3;
    -webkit-column-count: 3;
    column-count: 3;
  }
}
@media only screen and (min-width: 1201px) {
  .item-row {
    -moz-column-count: 4;
    -webkit-column-count: 4;
    column-count: 4;
  }
}
</style>
