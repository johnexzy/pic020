<template>
  <div class="row q-col-gutter-md">
    <div class="col-12 col-md-6 col-lg-6">
      <q-img :src="getPerson.image" class="full-width q-mb-md item-modal-img" />
    </div>
    <div class="col-12 col-md-6 col-lg-6">
      <q-card class="item-detail-modal full-height full-width">
        <q-card-section>
          <q-item class="q-pa-none">
            <!-- <q-item-section avatar>
              <q-avatar>
                <q-img
                  src="https://lh3.googleusercontent.com/6Jbode0t_bTO9MHYoYvjIW9nHENCxOs40EGg3Z5ptg4lLlD2z2WXEAIrjyV929aQnIi94hPL4VZ3Pl2NWOO_tSaO6gdjdrcMHrF9=s120"
                />
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <div class="text-caption text-grey-8 text-bold">
                DEVS FOR REVOLUTION
              </div>
            </q-item-section> -->
          </q-item>

          <div class="text-h3 text-black text-bolder q-my-md">
            {{ getPerson['Full Name'] }}
          </div>
<!--
          <div class="row q-gutter-md">
            <q-chip class="modal-chip">
              <q-avatar>
                <q-img
                  src="data:image/png;base64,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"
                />
              </q-avatar>
              <span class="q-ml-sm">Opensea</span>
            </q-chip>
            <q-chip class="modal-chip">
              <q-avatar>
                <q-img
                  src="data:image/png;base64,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"
                />
              </q-avatar>
              <span class="q-ml-sm">Rarible</span>
            </q-chip>
            <q-chip class="modal-chip">
              <q-avatar>
                <q-img
                  src="data:image/png;base64,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"
                />
              </q-avatar>
              <span class="q-ml-sm">Etherscan</span>
            </q-chip>
          </div> -->

          <div class="q-mt-md">
            <div class="text-grey-10 text-bold  text-subtitle2">Hobbies and Passion</div>
            <div class="text-grey-7 text-caption">
              {{ getPerson['Hobbies and passion'] }}
            </div>
          </div>
          <div class="q-mt-md">
            <div class="text-grey-10 text-bold text-subtitle2">Nick Name</div>
            <div class="text-grey-7 text-caption">
              {{ getPerson['Nick name (optional)'] }}
            </div>
          </div>
          <div class="q-mt-md">
            <div class="text-grey-10 text-bold text-subtitle2">State of Origin</div>
            <div class="text-grey-7 text-caption">
              {{ getPerson['State of origin'] }}
            </div>
          </div>
          <div class="q-mt-md">
            <div class="text-grey-10 text-bold text-subtitle2">Phone number</div>
            <div class="text-grey-7 text-caption">
              {{ getPerson['Phone number'] }}
            </div>
          </div>
          <div class="q-mt-md">
            <div class="text-grey-10 text-bold text-subtitle2">Email</div>
            <div class="text-grey-7 text-caption">
              {{ getPerson['Email Address'] }}
            </div>
          </div>
        </q-card-section>
        <!-- <q-card-section class="q-mt-md">
          <q-btn
            label="Open"
            no-caps
            flat
            icon="open_in_new"
          />
        </q-card-section> -->
      </q-card>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'src/store';
import { createNamespacedHelpers } from 'vuex-composition-helpers';
const { useGetters } = createNamespacedHelpers(useStore(), 'person');

// import { ModuleState, ModuleGetters, ModuleActions, ModuleMutations } from '@/store/person'
export default defineComponent({
  name: 'ModalItemDetail',
  props: {
    id: String,
  },

  setup() {
    const { getPerson } = useGetters(['getPerson']);
    return {
      getPerson,
    };
  },
});
</script>

<style>
.item-modal-img,
.item-detail-modal {
  border-radius: 30px;
}
.modal-chip {
  background-color: white;
  box-shadow: 1px 1px 5px 1px #d1d1d1;
}
.q-dialog__backdrop {
  z-index: -1;
  pointer-events: all;
  outline: 0;
  background: rgb(0 0 0 / 75%);
}
</style>
