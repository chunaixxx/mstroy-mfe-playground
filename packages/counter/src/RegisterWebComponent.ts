import ExposeComponent from "./ExposeApp.vue";

import {
  defineCustomElement as VueDefineCustomElement,
  h,
  createApp,
  getCurrentInstance,
} from "vue";

import { createWebComponent } from "vue-web-component-wrapper";
import { Quasar } from "quasar";

const pluginsWrapper = {
  install(GivenVue: any) {
    const Vue = GivenVue;
    Quasar.install(Vue, {});
  },
};

createWebComponent({
  rootComponent: ExposeComponent,
  elementName: "counter-wc",
  plugins: pluginsWrapper,
  cssFrameworkStyles: "",
  VueDefineCustomElement,
  h,
  createApp,
  getCurrentInstance,
  disableRemoveStylesOnUnmount: false,
  disableShadowDOM: true,
});
