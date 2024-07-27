import ExposeComponent from "./ExposeApp.vue";

import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/dist/quasar.sass";
import "src/css/app.scss";

import {
  defineCustomElement as VueDefineCustomElement,
  h,
  createApp,
  getCurrentInstance,
} from "vue";

import { createWebComponent } from "vue-web-component-wrapper";
import { Quasar } from "quasar";

const registerWebComponent = (wcTag: string) => {
  const pluginsWrapper = {
    install(GivenVue: any) {
      const Vue = GivenVue;
      Quasar.install(Vue, {});
    },
  };

  if (wcTag) {
    createWebComponent({
      rootComponent: ExposeComponent,
      elementName: wcTag,
      plugins: pluginsWrapper,
      cssFrameworkStyles: "",
      VueDefineCustomElement,
      h,
      createApp,
      getCurrentInstance,
      disableRemoveStylesOnUnmount: false,
      disableShadowDOM: true,
    });
  } else {
    console.error("Отсутствует аргумент wcTag. Укажите название тега");
  }
};

export default registerWebComponent;
