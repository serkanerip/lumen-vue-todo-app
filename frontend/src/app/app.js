import Vue from "vue";
import Vuex from "vuex";
import Router from "vue-router";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

import appRoutes from "./app-routes";
import appStore from "./app-store";
import modules from "./modules";

Vue.use(Router);
Vue.use(Vuex);

modules.forEach((install) => {
  install(appRoutes, appStore);
});

export const store = new Vuex.Store(appStore);
export const router = new Router({
  mode: "history",
  routes: appRoutes,
});

const requireComponent = require.context(
  // The relative path of the components folder
  "@/app/shared/ui/base",
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /\.vue$/i
);

requireComponent.keys().forEach((fileName) => {
  // Get component config
  const componentConfig = requireComponent(fileName);

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      // Gets the file name regardless of folder depth
      fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "")
    )
  );

  // Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  );
});
