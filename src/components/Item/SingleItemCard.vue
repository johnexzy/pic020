<template>
  <!-- <div>
    <router-link :to="{name:'drop-modal', params: { drop: item.slug} }">
      <q-img :src="item.image" class="full-width" />
      <q-item class="q-my-sm q-py-none q-px-none">
        <q-item-section class="w-50" avatar>
          <div class="text-uppercase">
            {{ item.title }}
            <q-img style="width: 15px" src="~assets/checked2.png" />
          </div>
        </q-item-section>
        <q-item-section>
          <div class="text-grey-6 text-right">{{ item.price }}</div>
        </q-item-section>
        <q-item-section side>
          <img src="~assets/fire.png" />
        </q-item-section>
      </q-item>
    </router-link>
    <router-view />
  </div> -->
  <div
    @click="goto(item)"
    class="item-card-wrapper cursor-pointer"
  >
    <!-- <div class="row justify-between q-mb-md">
      <div class="col-auto">
        <q-avatar
          :style="index != 1 ? 'margin-left: -15px;' : ''"
          v-for="index in 3"
          :key="index"
          size="40px"
        >
          <q-img class="full-height" :src="item.image" native-context-menu />
          <svg
            class="absolute all-pointer-events"
            size="32px"
            name="info"
            color="white"
            style="bottom: -5px; right: 0px"
            width="20"
            height="20"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z"
              fill="#feda03"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z"
              fill="#000000"
            ></path>
          </svg>
        </q-avatar>
      </div>
      <div class="col-2">
        <q-btn flat round unelevated icon="more_horiz">
          <q-menu>
            <q-card>
              <q-card-section>
                <div class="row">
                  <div class="col-12">
                    <q-btn
                      class="full-width"
                      label="Buy now"
                      align="left"
                      flat
                      no-caps
                      unelevated
                      color="grey-3"
                      text-color="grey-10"
                    />
                  </div>
                  <div class="col-12">
                    <q-btn
                      class="full-width"
                      label="Refresh metadata"
                      align="left"
                      flat
                      no-caps
                      unelevated
                      color="grey-3"
                      text-color="grey-10"
                    />
                  </div>
                  <div class="col-12">
                    <q-btn
                      class="full-width"
                      label="Share"
                      align="left"
                      flat
                      no-caps
                      unelevated
                      color="grey-3"
                      text-color="grey-10"
                    />
                  </div>
                  <div class="col-12">
                    <q-btn
                      class="full-width"
                      label="Report"
                      align="left"
                      flat
                      no-caps
                      unelevated
                      color="grey-3"
                      text-color="grey-10"
                    />
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </q-menu>
        </q-btn>
      </div>
    </div> -->
    <q-img class="item-card-wrapper-img q-mb-md" :src="item.image" />
    <div class="text-subtitle1 text-default text-weight-bold q-mb-xs">
      {{ item['Full Name'] }}
    </div>
    <q-item class="q-px-none">
      <q-item-section>
        <q-item-label>
          <q-icon name="phone" left size="sm" />
          <span class="text-grey-6 text-subtitle2">{{
            item['Phone number']
          }}</span>
        </q-item-label>
        <q-item-label :lines="2">
          <span class="text-grey-6">{{
            item['Email Address']
          }}</span></q-item-label
        >
        <q-item-label caption lines="2">🔥❤️❤️❤️❤️</q-item-label>
      </q-item-section>

      <!-- <q-item-section side>
        <q-item-label class="text-grey-6">
          <q-icon size="18px" name="favorite_border" color="grey-6" />
          4
        </q-item-label>
      </q-item-section> -->
    </q-item>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { useRouter } from 'vue-router'
import { Person } from '../models';
export default defineComponent({
  props: {
    item: {
      type: Object as PropType<Person>,
      default: () => ({
      'Timestamp': '7/16/2021 22:18:39',
      'Email Address': 'beatriceagu50@gmail.com',
      'Full Name': 'Agukpo Beatrice Nneka ',
      'State of origin': 'ENUGU',
      'Phone number': '07050459080',
      'Nick name (optional)': 'Tricy',
      'Hobbies and passion': 'Love listen to music / dancing ',
      'Photo (passport)': 'https://drive.google.com/open?id=1JUFo3YjavQbdFCUk-6ODEXPvey3i8GSE',
      'image': 'https://drive.google.com/uc?id=1JUFo3YjavQbdFCUk-6ODEXPvey3i8GSE',
      id: 38,
      slug: 'agukpo-Beatrice-Nneka'
    }),
    },
  },

  setup() {
    const router = useRouter()
    const goto = (item: Person): void => router.push({ name:'chemistModal', params: {slug: item.slug}})
    return {
      itemDetailModal: false,
      alert: false,
      goto
    };
  },
  // computed: {
  //   routeName() {
  //     return this[this.$route.name];
  //   },
  // },
});
</script>
