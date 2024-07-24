<template>
  <q-page class="row items-center justify-evenly">
    <counter-ce />
  </q-page>
</template>

<script>
import Vue from "vue";

import CounterCE from "counter/ExposeComponent";

customElements.define("counter-ce", CounterCE);

export default Vue.extend({
  name: "Index",
});
</script>
