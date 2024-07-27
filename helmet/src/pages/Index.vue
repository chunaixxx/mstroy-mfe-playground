<template>
  <q-page class="row items-center justify-evenly">
    <div>
      <div class="text-subtitle1">helmet</div>
      <Counter />
    </div>

    <div>
      <div class="text-subtitle1">packages/counter</div>
      <counter-wc />
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

  methods: {
    onClick() {
      console.log(Vue.version);
    },
  },
});
</script>
