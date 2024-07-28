<template>
  <q-page class="row items-center justify-evenly">
    <div>
      <div class="text-subtitle1">helmet</div>
      <q-input
        v-model="labelWC"
        class="q-my-md"
        label="label packages/counter"
        filled
      />
      <Counter @click-counter="onClick" />
    </div>

    <div>
      <div class="text-subtitle1">packages/counter</div>
      <counter-wc :label="labelWC" @click-counter="onClick($event.detail[0])" />
    </div>
  </q-page>
</template>

<script>
import Vue from "vue";

import Counter from "../components/Counter.vue";
import registerWebComponent from "counter/registerWebComponent";

registerWebComponent("counter-wc");

export default Vue.extend({
  name: "Index",
  components: { Counter },

  data() {
    return {
      labelWC: "label props from helmet",
    };
  },

  methods: {
    onClick(from) {
      this.$q.notify(`Click from: ${from}`);
    },
  },
});
</script>
