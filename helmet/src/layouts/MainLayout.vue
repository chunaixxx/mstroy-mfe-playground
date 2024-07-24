<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>helmet</q-toolbar-title>

        <q-space />

        <div>Vue 2, Webpack 4, Quasar 1</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "MainLayout",
  data() {
    return {};
  },
});
</script>
